import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from 'src/components/common';
import SectionHeader from 'src/components/home/SectionHeader';
import auth from '@react-native-firebase/auth';
import { HomeScreenProp, Route } from 'src/constants';
import { setActiveUser, userSelector } from 'src/redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'src/redux/user/userActions';

const ProfileScreen = () => {
  const { navigate } = useNavigation<HomeScreenProp>();

  const dispatch = useDispatch();
  const {
    user: { email },
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

  return (
    <View>
      {/* for testing propose only */}
      <Button onPress={handleLogout} title="Logout" />
      <SectionHeader title="Auth" onPress={() => navigate(Route.AUTH)} />
    </View>
  );
};

export default ProfileScreen;
