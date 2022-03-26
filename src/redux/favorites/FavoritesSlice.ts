import { createSlice } from '@reduxjs/toolkit';
import { Player } from 'src/ts/interfaces';
import { setFavorite } from './FavoriteActions';

interface FavoriteState {
  favorite: Player[];
  error: string;
  loading: boolean;
}

const initialState: FavoriteState = {
  favorite: [],
  error: '',
  loading: false,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setFavorite.pending, state => {
        state.error = '';
        state.loading = true;
      })
      .addCase(setFavorite.fulfilled, state => {
        state.loading = false;
      })
      .addCase(setFavorite.rejected, (state, action) => {
        state.error = action.error.message ?? 'error';
        state.loading = false;
      });
  },
});

export default favoriteSlice.reducer;
export const favoriteSelector = (state: { posts: FavoriteState }) =>
  state.posts;
