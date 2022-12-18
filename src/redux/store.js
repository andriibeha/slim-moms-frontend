import { configureStore } from '@reduxjs/toolkit';
import { showModal } from './reducer';

export const store = configureStore({
  reducer: {
    showModal: showModal,
  },
});
