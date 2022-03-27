import { useCollection } from '@skillnation/react-native-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { userSelector } from 'src/redux/user/userSlice';

export default function useProfileData() {
  const {
    user: { userName, photoURL, id },
  } = useSelector(userSelector);

  const [postValue, postLoading, postError] = useCollection(
    firestore().collection('users').doc(id).collection('posts'),
  );

  const [playersValue, playersLoading, playersError] = useCollection(
    firestore().collection('users').doc(id).collection('players'),
  );

  const error = postError || playersError;
  const loading = postLoading || playersLoading;

  return {
    userName,
    photoURL,
    postValue,
    playersValue,
    loading,
    error,
  };
}
