import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { Button } from 'src/components/common';
import {
  DEFAULT_AVATAR,
  HomeScreenProp,
  Route,
  WINDOW_WIDTH,
} from 'src/constants';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'src/redux/user/userActions';
import Header from 'src/components/common/AnimatedHeader/Header';
import cover from 'src/assets/images/profileCover.jpg';
import ErrorContainer from 'src/components/containers/ErrorContainer';
import { errorConverter } from 'src/helpers/errorConverter';
import News from 'src/components/common/News';
import useOnAuthStateChange from 'src/hooks/useOnAuthStateChanged';
import SectionHeader from 'src/components/home/SectionHeader';
import useProfileData from 'src/hooks/useProfileData';
import PlayerCard from 'src/components/home/PlayerCard';
import MatchCard from 'src/components/home/MatchCard';

const ProfileScreen = () => {
  const {
    userName,
    photoURL,
    postValue,
    playersValue,
    matchesValue,
    favPostValue,
    loading,
    error,
  } = useProfileData();

  const { goBack } = useNavigation<HomeScreenProp>();

  if (error) {
    return <ErrorContainer error={errorConverter(error)} refresh={goBack} />;
  }

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  useOnAuthStateChange();

  const { navigate } = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <Header
        name={userName}
        photo={photoURL ?? DEFAULT_AVATAR}
        background={cover}
      >
        {!!loading && (
          <View style={{ padding: 40 }}>
            <ActivityIndicator />
          </View>
        )}
        {!!postValue && (
          <>
            <SectionHeader
              title="Yours posts"
              onPress={() => navigate(Route.CREATE_POST)}
            />
            <FlatList
              data={postValue.docs}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ width: WINDOW_WIDTH - 30 }}>
                  <News
                    title={item.data().title.toString()}
                    data={item.data().createdAt.toString()}
                    image={item.data().photoURL.toString()}
                    onPress={() => navigate(Route.POST, { id: item.data().id })}
                  />
                </View>
              )}
            />
          </>
        )}
        {!!playersValue && (
          <>
            <SectionHeader
              title="Favorite players"
              onPress={() => navigate(Route.PLAYERS)}
            />
            <FlatList
              data={playersValue.docs}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <PlayerCard
                  name={item.data().name.toString()}
                  photo={item.data().photo.toString()}
                  club={item.data().team.toString()}
                  matches={item.data().statistics.gamesPlayed.toString()}
                  goals={item.data().statistics.goals.toString()}
                  assists={item.data().statistics.assists.toString()}
                  rating={item.data().statistics.rating.toString()}
                  onPress={() => navigate(Route.PLAYER, { id: item.data().id })}
                />
              )}
            />
          </>
        )}
        {!!matchesValue && (
          <>
            <SectionHeader
              title="Followed matches"
              onPress={() => navigate(Route.PLAYERS)}
            />
            <FlatList
              data={matchesValue.docs}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ width: WINDOW_WIDTH - 30 }}>
                  <MatchCard
                    status={item.data().status.toString()}
                    host={item.data().home}
                    guest={item.data().away}
                    onPress={() => {}}
                  />
                </View>
              )}
            />
          </>
        )}
        {!!favPostValue && (
          <>
            <SectionHeader
              title="Favorite posts"
              onPress={() => navigate(Route.CREATE_POST)}
            />
            <FlatList
              data={favPostValue.docs}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ width: WINDOW_WIDTH - 30 }}>
                  <News
                    title={item.data().title.toString()}
                    data={item.data().createdAt.toString()}
                    image={item.data().photoURL.toString()}
                    onPress={() => navigate(Route.POST, { id: item.data().id })}
                  />
                </View>
              )}
            />
          </>
        )}
        <View style={{ paddingBottom: 40 }} />
        <Button onPress={handleLogout} title="Logout" />
      </Header>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
  },
});
