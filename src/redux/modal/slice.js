import { createReducer } from '@reduxjs/toolkit';
import { toggleModal } from './operations';

export const showModal = createReducer(false, {
  [toggleModal]: (_, action) => action.payload,
});
