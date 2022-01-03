import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { HeaderBar, Input } from 'src/components/common';
import Container from 'src/components/containers/Container';
import ErrorContainer from 'src/components/containers/ErrorContainer';
import PlayerCard from 'src/components/home/PlayerCard';
import { HomeScreenProp, Route } from 'src/constants';
import { errorConverter } from 'src/helpers/errorConverter';
import useBackIcon from 'src/hooks/useBackIcon';
import useDebounce from 'src/hooks/useDebounce';
import { useGetPlayerSearchQuery } from 'src/services/football';

const PlayersScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, isLoading, error, isError, refetch } =
    useGetPlayerSearchQuery(debouncedSearchTerm);

  const leftIcon = useBackIcon();
  const { navigate } = useNavigation<HomeScreenProp>();

  useEffect(() => {
    if (searchTerm || searchTerm.length > 4) {
      setSearchTerm(searchTerm);
    }
  }, [searchTerm]);

  if (isError) {
    return <ErrorContainer error={errorConverter(error)} refresh={refetch} />;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <HeaderBar title="Players" leftIcon={leftIcon} />
      <Input
        placeholder="Search players"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20, alignSelf: 'center', width: '90%' }}
        renderItem={({
          item: {
            id,
            name,
            photo,
            team,
            statistics: { goals, assists, gamesPlayed, rating },
          },
        }) => (
          <PlayerCard
            name={name}
            photo={photo}
            club={team}
            matches={gamesPlayed}
            goals={goals}
            assists={assists}
            rating={Number(rating)}
            isSearched
            onPress={() => navigate(Route.PLAYER, { id })}
          />
        )}
      />
    </Container>
  );
};

export default PlayersScreen;
