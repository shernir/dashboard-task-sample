import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import userSlice from './slices/userSlice';
import { API } from '../services/rtk.api';
import { rtkQueryErrorLogger } from '../middlewares/error-handler.middleware';

// presist config to store data in local storage
const persistConfig = {
  key: 'root',
  storage,
};
// config reducer to stor userslice in localstorage
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    userSlice: persistedReducer,
    [API.reducerPath]: API.reducer,
  },
  middleware: [API.middleware, rtkQueryErrorLogger, thunk],
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
