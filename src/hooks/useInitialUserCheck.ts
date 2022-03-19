import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeScreenProp, Route } from 'src/constants';
import { setActiveUser, userSelector } from 'src/redux/user/userSlice';

export default function useInitialUserCheck() {
  const {
    user: { email },
  } = useSelector(userSelector);

  const dispatch = useDispatch();
  const { navigate } = useNavigation<HomeScreenProp>();

  useEffect(() => {
    if (!email) {
      const subscriber = auth().onAuthStateChanged(userFirebase => {
        if (userFirebase) {
          dispatch(
            setActiveUser({
              email: userFirebase.email,
              userName: userFirebase.displayName,
              photoURL: userFirebase.photoURL,
              id: userFirebase.uid,
            }),
          );
          navigate(Route.HOME);
        }
        if (!userFirebase) {
          navigate(Route.LOGIN);
        }
      });
      return subscriber;
    }
    return () => {};
  }, [email, dispatch]);
}
