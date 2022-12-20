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

import { userReducer } from './user/slice';
import { modalReducer } from './modal/slice';
import { bloodDietReducer } from './bloodDiet/slice';

import { showModal } from './modal/slice';
import productsReducer from './products/products-slice';


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


const userPersistConfig = {
  key: 'user',
  storage,
};

// const showModalPersistConfig = {
//   key: 'modal',
//   storage,
// };


export const store = configureStore({
  reducer: {
    login: persistReducer(logInPersistConfig, logInReducer),
    auth: persistReducer(authPersistConfig, authReducer),

    user: persistReducer(userPersistConfig, userReducer),
    // modal: persistReducer(showModalPersistConfig, modalReducer),
    modal: modalReducer,
    bloodDiet: bloodDietReducer,
{/*
    modal: showModal,
    products: productsReducer,
 */
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
