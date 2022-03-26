/* eslint-disable consistent-return */
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Player } from 'src/ts/interfaces';

// eslint-disable-next-line import/prefer-default-export
export const addToFavorites = async (player: Player, type: string) => {
  const { id, name, photo, position, team, statistics } = player;
  const db = firestore();
  const userId = auth().currentUser?.uid;

  if (!userId) {
    return null;
  }
  const docRef = db
    .collection('users')
    .doc(userId)
    .collection(type)
    .doc(id.toString());

  const doc = await docRef.get();

  if (doc.exists) {
    docRef.delete();
  }
  if (!doc.exists) {
    docRef.set({
      id,
      name,
      photo,
      position,
      team,
      statistics,
    });
  }
};
