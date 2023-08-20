import { configureStore } from '@reduxjs/toolkit';
import point from './sliceCount';

export const store = configureStore({
  reducer: {
    point,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;