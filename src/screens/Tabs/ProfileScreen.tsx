import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Button } from 'src/components/common';
import SectionHeader from 'src/components/home/SectionHeader';
import { HomeScreenProp, Route } from 'src/constants';
import { setActiveUser, userSelector } from 'src/redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'src/redux/user/userActions';
import Header from 'src/components/common/AnimatedHeader/Header';

const ProfileScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();

  const dispatch = useDispatch();
  const {
    user: { email, userName },
  } = useSelector(userSelector);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  useEffect(() => {
    if (!email) {
      const subscriber = auth().onAuthStateChanged(userFirebase => {
        if (userFirebase) {
          dispatch(
            setActiveUser({
              email: userFirebase.email,
              userName: userFirebase.displayName,
            }),
          );
        }
      });
      return subscriber;
    }
    return () => {};
  }, [email, dispatch]);

  // mocked avatar and background just for now
  const avatar = 'https://i.pravatar.cc/300';
  const background = 'https://i.pravatar.cc/400';

  return (
    <View style={styles.container}>
      {/* for testing propose only */}
      <Header name={userName} photo={avatar} background={background}>
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
