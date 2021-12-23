import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenProp, Route } from 'src/constants';

export default function useOnAuthStateChange() {
  const { navigate } = useNavigation<AuthScreenProp>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        navigate(Route.HOME);
      }
    });
    return subscriber;
  }, [navigate]);
}
