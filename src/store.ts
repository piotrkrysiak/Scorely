import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userSlice from './redux/user/userSlice';
import { footballApi } from './services/football';

const store = configureStore({
  reducer: {
    [footballApi.reducerPath]: footballApi.reducer,
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(footballApi.middleware),
});

setupListeners(store.dispatch);

export default store;
