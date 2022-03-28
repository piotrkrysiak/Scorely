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

  const [matchesValue, matchLoading, matchError] = useCollection(
    firestore().collection('users').doc(id).collection('matches'),
  );

  const [favPostValue, favPostLoading, favPostError] = useCollection(
    firestore().collection('users').doc(id).collection('post_favorite'),
  );

  const error = postError || playersError || matchError || favPostError;
  const loading =
    postLoading || playersLoading || matchLoading || favPostLoading;

  return {
    userName,
    photoURL,
    postValue,
    playersValue,
    matchesValue,
    favPostValue,
    loading,
    error,
  };
}
