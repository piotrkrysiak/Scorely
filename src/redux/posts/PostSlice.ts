import { createSlice } from '@reduxjs/toolkit';
import { Post } from 'src/ts/interfaces/post';
import { setPost } from './PostActions';

interface PostState {
  posts: Post[];
  error: string;
  loading: boolean;
}

const initialState: PostState = {
  posts: [],
  error: '',
  loading: false,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setErrorNull: state => {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setPost.pending, state => {
        state.error = '';
        state.loading = true;
      })
      .addCase(setPost.fulfilled, state => {
        state.loading = false;
      })
      .addCase(setPost.rejected, (state, action) => {
        state.error = action.error.message ?? 'error';
        state.loading = false;
      });
  },
});

export const { setErrorNull } = postSlice.actions;

export default postSlice.reducer;
export const postSelector = (state: { posts: PostState }) => state.posts;
