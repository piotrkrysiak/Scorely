import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Button } from 'src/components/common';
import SectionHeader from 'src/components/home/SectionHeader';
import { DEFAULT_AVATAR, HomeScreenProp, Route } from 'src/constants';
import { userSelector } from 'src/redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'src/redux/user/userActions';
import Header from 'src/components/common/AnimatedHeader/Header';
import useInitialUserCheck from 'src/hooks/useInitialUserCheck';
import cover from 'src/assets/images/profileCover.jpg';
import { useCollection } from '@skillnation/react-native-firebase-hooks/firestore';
import firestore from '@react-native-firebase/firestore';
import ErrorContainer from 'src/components/containers/ErrorContainer';
import { errorConverter } from 'src/helpers/errorConverter';
import News from 'src/components/common/News';

const ProfileScreen = () => {
  const {
    user: { userName, photoURL, id },
  } = useSelector(userSelector);

  const [value, loading, error] = useCollection(
    firestore().collection('users').doc(id).collection('posts'),
  );

  const { navigate, goBack } = useNavigation<HomeScreenProp>();

  if (error) {
    return <ErrorContainer error={errorConverter(error)} refresh={goBack} />;
  }

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  useInitialUserCheck();

  return (
    <View style={styles.container}>
      <Header
        name={userName}
        photo={photoURL ?? DEFAULT_AVATAR}
        background={cover}
      >
        <SectionHeader title="Auth" onPress={() => navigate(Route.AUTH)} />
        {!!loading && <ActivityIndicator />}
        {!!value &&
          value.docs.map(doc => (
            <View key={doc.id} style={{ marginBottom: 10 }}>
              <News
                title={doc.data().title.toString()}
                data={doc.data().createdAt.toString()}
                image={doc.data().photoURL.toString()}
                onPress={() => {}}
              />
            </View>
          ))}
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
