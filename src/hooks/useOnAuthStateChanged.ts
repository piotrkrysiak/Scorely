import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProp, Route } from 'src/constants';

export default function useOnAuthStateChange() {
  const { navigate } = useNavigation<HomeScreenProp>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      // if (user) {
      //   navigate(Route.HOME);
      // }
      // if (!user) {
      //   navigate(Route.LOGIN);
      // }
    });
    return subscriber;
  }, [navigate]);
}
