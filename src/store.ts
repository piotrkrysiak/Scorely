import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { playerApi } from './services/player';

const store = configureStore({
  reducer: {
    [playerApi.reducerPath]: playerApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(playerApi.middleware),
});

setupListeners(store.dispatch);

export default store;
