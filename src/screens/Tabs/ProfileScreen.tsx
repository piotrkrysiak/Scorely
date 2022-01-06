import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Button } from 'src/components/common';
import SectionHeader from 'src/components/home/SectionHeader';
import { DEFAULT_AVATAR, HomeScreenProp, Route } from 'src/constants';
import { userSelector } from 'src/redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'src/redux/user/userActions';
import Header from 'src/components/common/AnimatedHeader/Header';
import useInitialUserCheck from 'src/hooks/useInitialUserCheck';
import cover from 'src/assets/images/profileCover.jpg';

const ProfileScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();

  const dispatch = useDispatch();
  const {
    user: { userName, photoURL },
  } = useSelector(userSelector);

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
        <Button onPress={handleLogout} title="Logout" />
        <SectionHeader title="Auth" onPress={() => navigate(Route.AUTH)} />
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
