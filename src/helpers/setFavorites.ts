/* eslint-disable consistent-return */
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
// eslint-disable-next-line import/no-cycle
import { FavoriteState } from 'src/redux/favorites/FavoriteActions';

// eslint-disable-next-line import/prefer-default-export
export const addToFavorites = async (favorite: FavoriteState) => {
  console.log('addToFavorites', favorite);

  const db = firestore();
  const userId = auth().currentUser?.uid;
  const { id } = favorite.favorite;

  if (!userId) {
    return null;
  }
  const docRef = db
    .collection('users')
    .doc(userId)
    .collection(favorite.type)
    .doc(id.toString());

  const doc = await docRef.get();

  if (doc.exists) {
    docRef.delete();
  }
  if (!doc.exists) {
    docRef.set({
      ...favorite.favorite,
    });
  }
};
