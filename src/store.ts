import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import postSlice from 'src/redux/posts/PostSlice';
import userSlice from 'src/redux/user/userSlice';
import { footballApi } from 'src/services/football';

const store = configureStore({
  reducer: {
    [footballApi.reducerPath]: footballApi.reducer,
    user: userSlice,
    posts: postSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(footballApi.middleware),
});

setupListeners(store.dispatch);

export default store;
