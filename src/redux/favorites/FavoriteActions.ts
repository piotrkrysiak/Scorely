import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToFavorites } from 'src/helpers/setFavorites';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Player } from 'src/ts/interfaces';

// eslint-disable-next-line import/prefer-default-export
export const setFavorite = createAsyncThunk<void, any>(
  'favorite/setFavorite',
  async favorite => {
    await addToFavorites(favorite, 'players');
  },
);

export const getFavorite = createAsyncThunk<Player[], void>(
  'favorite/getFavorite',
  async () => {
    const userId = auth().currentUser?.uid;
    const db = firestore();
    const docRef = db
      .collection('users')
      .doc(userId)
      .collection('players')
      .get();

    const favorite: Player[] = [];

    (await docRef).forEach(doc => {
      const { id, name, photo, position, team, statistics } = doc.data();
      favorite.push({ id, name, photo, position, team, statistics });
    });

    return favorite;
  },
);
