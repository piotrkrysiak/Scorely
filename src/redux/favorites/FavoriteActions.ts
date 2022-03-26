import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToFavorites } from 'src/helpers/setFavorites';

// eslint-disable-next-line import/prefer-default-export
export const setFavorite = createAsyncThunk<void, any>(
  'favorite/setFavorite',
  async favorite => {
    await addToFavorites(favorite, 'players');
  },
);
