/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import 'react-native-get-random-values';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { v4 as uuid } from 'uuid';
import { Post } from 'src/ts/interfaces/post';

// that will be refactored, is it for the testing purposes just for now
export const setData = async (post: Post, name: string) => {
  const { title, description, createdAt } = post;
  const id = uuid();
  const db = firestore();
  const userId = auth().currentUser?.uid;

  if (!userId) {
    return null;
  }
  const docRef = db
    .collection('users')
    .doc(userId)
    .collection(name)
    .doc(id.toString());

  const doc = await docRef.get();

  if (doc.exists) {
    docRef.delete();
  }
  if (!doc.exists) {
    docRef.set({
      title,
      description,
      createdAt,
    });
  }
};
