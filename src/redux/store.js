import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { logInReducer } from './login/slice';
import authReducer from './auth/auth-slice';

const logInPersistConfig = {
  key: 'login',
  version: 1,
  storage,
  whitelist: ['token'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    login: persistReducer(logInPersistConfig, logInReducer),
    auth: persistReducer(authPersistConfig, authReducer),
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
