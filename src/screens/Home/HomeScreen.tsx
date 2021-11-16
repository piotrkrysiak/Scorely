import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';
import { HomeScreenProp, Route } from 'src/constants';
import SectionHeader from 'src/components/home/SectionHeader';
import NewsBanner from 'src/components/home/NewsBanner';
import Container from 'src/components/containers/Container';
import PlayerCard from 'src/components/home/PlayerCard';
import { FlatList } from 'react-native-gesture-handler';
import MatchCard from 'src/components/home/MatchCard';

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();

  // TODO: It's a mock data, need to be replaced with real data from firebase
  const icon: ImageSourcePropType = {
    uri: 'https://lh3.googleusercontent.com/proxy/CSe4rAgVTcn8BhAwso3-eC6_4z6J9TQaWvHPSO5g2U0mDo0p_zeiwPCEm7raHjzkQya19QTcVI_X70P274fWWiSCZgowGPM95t-dp_pgL6tFi2ypWggwVd-UziiLHeNx76pxTLCulI9FgSier5VXymEp',
  };
  const bannerImage: ImageSourcePropType = {
    uri: 'https://i.postimg.cc/gj8g3LSN/riyad-mahrez-1.png',
  };

  // TODO: It's a mock data, need to be replaced with real data from Football API
  const players = [
    {
      id: 1,
      photo: 'https://pliki.meczyki.pl/big700/336/5ee9dca932de3.jpg',
      name: 'Mohamed Salah',
      club: 'Liverpool',
      matches: 11,
      goals: 11,
      assists: 5,
      xGoals: 9,
    },
    {
      id: 2,
      photo: 'https://i.imgur.com/Kab1Zzo.jpg',
      name: 'Romelu Lukaku',
      club: 'Chelsea',
      matches: 5,
      goals: 3,
      assists: 4,
      xGoals: 8,
    },
  ];

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
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({
          item: { name, photo, club, matches, goals, assists, xGoals },
        }) => (
          <PlayerCard
            name={name}
            photo={photo}
            club={club}
            matches={matches}
            goals={goals}
            assists={assists}
            xGoals={xGoals}
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
