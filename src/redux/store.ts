import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { API } from '../services/rtk.api';
import { rtkQueryErrorLogger } from '../middlewares/error-handler.middleware';

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(API.middleware)
    .concat(rtkQueryErrorLogger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
