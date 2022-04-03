import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Favorite } from 'src/ts/interfaces/favorite';
import { getFavorite, setFavorite } from './FavoriteActions';

interface FavoriteState {
  favorite: Favorite; // object with array of favorite players, posts, matches etc
  error: string;
  loading: boolean;
}

const initialState: FavoriteState = {
  favorite: {
    players: [],
    posts: [],
    matches: [],
  },
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
      })
      .addCase(getFavorite.pending, state => {
        state.error = '';
        state.loading = true;
      })
      .addCase(
        getFavorite.fulfilled,
        (state, action: PayloadAction<Favorite>) => {
          state.favorite = action.payload;
          state.loading = false;
        },
      )
      .addCase(getFavorite.rejected, (state, action) => {
        state.error = action.error.message ?? 'error';
        state.loading = false;
      });
  },
});

export default favoriteSlice.reducer;
export const favoriteSelector = (state: { favorite: FavoriteState }) =>
  state.favorite;
