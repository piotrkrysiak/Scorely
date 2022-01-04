import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ImageSourcePropType } from 'react-native';
import { DATA_NOT_FOUND, HomeScreenProp, Route } from 'src/constants';
import { errorConverter } from 'src/helpers/errorConverter';
import SectionHeader from 'src/components/home/SectionHeader';
import NewsBanner from 'src/components/home/NewsBanner';
import Container from 'src/components/containers/Container';
import PlayerCard from 'src/components/home/PlayerCard';
import MatchCard from 'src/components/home/MatchCard';
import LoadingPlaceholder from 'src/components/home/LoadingPlaceholder';
import ErrorContainer from 'src/components/containers/ErrorContainer';
import useHomeData from 'src/hooks/useHomeData';

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();

  // TODO: It's a mock data, need to be replaced with real data from firebase
  const icon: ImageSourcePropType = {
    uri: 'https://lh3.googleusercontent.com/proxy/jQZSrZpeo6guHKMY0b5nCtmpf7fQbVrMzgY6_3XmVRFSYEkxSEdTztHcyY_4qzRi2puIcndVQtmHjTfIp1jJJpxLiiyANGfny1d05DgM41Ijmu2LCWow20tdIKNMOAInHtHj1Zv3-c7b7fz4qGPaKrFv',
  };
  const bannerImage: ImageSourcePropType = {
    uri: 'https://i.postimg.cc/gj8g3LSN/riyad-mahrez-1.png',
  };

  const { players, matches, isLoading, isError, error, refetch } =
    useHomeData();

  if (isLoading) {
    return <LoadingPlaceholder />;
  }

  if (isError) {
    return <ErrorContainer error={errorConverter(error)} refresh={refetch} />;
  }

  if (!players || !matches) {
    return <ErrorContainer error={DATA_NOT_FOUND} refresh={refetch} />;
  }

  return (
    <Container scroll>
      <SectionHeader title="News" onPress={() => navigate(Route.NEWS)} />
      <NewsBanner
        title="Champions sparkle as Canaries Threshed"
        data="Yesterday, 6:30 PM"
        icon={icon}
        image={bannerImage}
        onPress={() => navigate(Route.POST, { id: 1 })}
      />
      <SectionHeader title="Players" onPress={() => navigate(Route.PLAYERS)} />
      <FlatList
        data={players}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
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
            onPress={() => navigate(Route.PLAYER, { id })}
          />
        )}
      />
      <SectionHeader title="Matches" onPress={() => navigate(Route.RESULTS)} />
      {matches.map(({ id, home, away, status }) => (
        <MatchCard
          key={id}
          host={home}
          guest={away}
          status={status}
          onPress={() => navigate(Route.MATCH, { id })}
        />
      ))}
    </Container>
  );
};

export default HomeScreen;
