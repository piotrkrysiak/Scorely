import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { addToFavorites } from 'src/helpers/setFavorites';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { MatchCard, Player } from 'src/ts/interfaces';
import { Post } from 'src/ts/interfaces/post';

export interface FavoriteState {
  favorite: Player | Post | MatchCard;
  type: string;
}

// eslint-disable-next-line import/prefer-default-export
export const setFavorite = createAsyncThunk<void, FavoriteState>(
  'favorite/setFavorite',
  async favorite => {
    await addToFavorites(favorite);
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

    const player: Player[] = [];

    (await docRef).forEach(doc => {
      const { id, name, photo, position, team, statistics } = doc.data();
      player.push({ id, name, photo, position, team, statistics });
    });

    return player;
  },
);
