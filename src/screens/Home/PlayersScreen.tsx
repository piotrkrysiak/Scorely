import React, { useEffect, useState } from 'react';
import Modal from 'src/components/common/Modal';
import Container from 'src/components/containers/Container';
import ErrorContainer from 'src/components/containers/ErrorContainer';
import PlayerCard from 'src/components/home/PlayerCard';
import SectionHeader from 'src/components/home/SectionHeader';
import useBackIcon from 'src/hooks/useBackIcon';
import useDebounce from 'src/hooks/useDebounce';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { HeaderBar, Input, Text } from 'src/components/common';
import { filter, HomeScreenProp, Route } from 'src/constants';
import { errorConverter } from 'src/helpers/errorConverter';
import {
  useGetPlayerSearchQuery,
  useGetTopPlayersQuery,
} from 'src/services/football';

const PlayersScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<filter>('topscorers');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(prev => !prev);
    setSearchTerm('');
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const {
    data: searchData,
    isLoading: searchLoading,
    error: searchError,
    isError: searchIsError,
    refetch: searchRefetch,
  } = useGetPlayerSearchQuery(debouncedSearchTerm);

  const {
    data: filterData,
    isLoading: filterLoading,
    error: filterError,
    isError: filterIsError,
    refetch: filterRefetch,
  } = useGetTopPlayersQuery(selectedFilter);

  const error = searchError || filterError;
  const isError = searchIsError || filterIsError;
  const isLoading = searchLoading || filterLoading;

  const refetch = () => {
    filterRefetch();
    searchRefetch();
  };

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

  if (!searchData || !filterData) {
    return <Text>There is not table data</Text>;
  }

  return (
    <Container>
      <HeaderBar title="Players" leftIcon={leftIcon} />
      <SectionHeader title="Filter" onPress={toggleModal} />
      <Input
        placeholder="Search players"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Modal isModalVisible={isModalVisible} toggleModal={toggleModal}>
        <Picker
          selectedValue={selectedFilter}
          onValueChange={itemValue => setSelectedFilter(itemValue)}
        >
          <Picker.Item label="Top Scorers" value="topscorers" />
          <Picker.Item label="Top Assists" value="topassists" />
          <Picker.Item label="Top Yellow Cards" value="topyellowcards" />
          <Picker.Item label="Top Red Cards" value="topredcards" />
        </Picker>
      </Modal>
      <FlatList
        data={!searchData.length || isModalVisible ? filterData : searchData}
        keyExtractor={item => item.id.toString()}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ height: 150 }} />}
        style={{ marginTop: 10, alignSelf: 'center', width: '90%' }}
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
