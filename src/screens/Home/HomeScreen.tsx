import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ImageSourcePropType } from 'react-native';
import { HomeScreenProp, Route } from 'src/constants';
import SectionHeader from 'src/components/home/SectionHeader';
import NewsBanner from 'src/components/home/NewsBanner';
import Container from 'src/components/containers/Container';
import PlayerCard from 'src/components/home/PlayerCard';
import MatchCard from 'src/components/home/MatchCard';
import { useGetAllQuery } from 'src/services/player';

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();

  // TODO: It's a mock data, need to be replaced with real data from firebase
  const icon: ImageSourcePropType = {
    uri: 'https://lh3.googleusercontent.com/proxy/jQZSrZpeo6guHKMY0b5nCtmpf7fQbVrMzgY6_3XmVRFSYEkxSEdTztHcyY_4qzRi2puIcndVQtmHjTfIp1jJJpxLiiyANGfny1d05DgM41Ijmu2LCWow20tdIKNMOAInHtHj1Zv3-c7b7fz4qGPaKrFv',
  };
  const bannerImage: ImageSourcePropType = {
    uri: 'https://i.postimg.cc/gj8g3LSN/riyad-mahrez-1.png',
  };

  // TODO: It's a mock data, need to be replaced with real data from Football API

  const host = {
    name: 'Liverpool',
    photo:
      'https://logodownload.org/wp-content/uploads/2017/02/liverpool-fc-logo-escudo-2.png',
    score: 2,
  };
  const guest = {
    name: 'Brighton',
    photo:
      'https://static.wikia.nocookie.net/kibice/images/c/c2/800px-Brighton_%26_Hove_Albion_logo.svg.png/revision/latest?cb=20190822210220&path-prefix=pl',
    score: 2,
  };

  const { data: players, isLoading, isError } = useGetAllQuery();

  if (isLoading || isError) {
    return <></>;
  }

  return (
    <Container scroll>
      <SectionHeader title="News" onPress={() => navigate(Route.AUTH)} />
      <NewsBanner
        title="Champions sparkle as Canaries Threshed"
        data="Yesterday, 6:30 PM"
        icon={icon}
        image={bannerImage}
      />
      <SectionHeader title="Players" onPress={() => navigate(Route.AUTH)} />
      <FlatList
        data={players}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({
          item: {
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
          />
        )}
      />
      <SectionHeader title="Matches" onPress={() => navigate(Route.AUTH)} />
      <MatchCard guest={guest} host={host} status="FT" />
      <MatchCard guest={guest} host={host} status="68'" />
    </Container>
  );
};

export default HomeScreen;
