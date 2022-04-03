import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { addToFavorites } from 'src/helpers/setFavorites';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { MatchCard, Player } from 'src/ts/interfaces';
import { Post } from 'src/ts/interfaces/post';
import { Favorite } from 'src/ts/interfaces/favorite';

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

export const getFavorite = createAsyncThunk<Favorite, void>(
  'favorite/getFavorite',
  async () => {
    const userId = auth().currentUser?.uid;
    const db = firestore();
    const docRef = db
      .collection('users')
      .doc(userId)
      .collection('players')
      .get();

    const docRefMatches = db
      .collection('users')
      .doc(userId)
      .collection('players')
      .get();

    const docRefPosts = db
      .collection('users')
      .doc(userId)
      .collection('post_favorite')
      .get();

    const player: Player[] = [];

    (await docRef).forEach(doc => {
      const { id, name, photo, position, team, statistics } = doc.data();
      player.push({ id, name, photo, position, team, statistics });
    });

    const matches: MatchCard[] = [];

    // add matches and posts
    (await docRefMatches).forEach(doc => {
      const { id, home, away, status } = doc.data();
      matches.push({ id, home, away, status });
    });

    const posts: Post[] = [];

    (await docRefPosts).forEach(doc => {
      const { id, title, createdAt, photoURL, description } = doc.data();
      posts.push({ id, title, createdAt, photoURL, description });
    });

    return {
      players: player,
      posts,
      matches,
    };
  },
);
