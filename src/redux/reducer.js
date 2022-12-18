import { createReducer } from '@reduxjs/toolkit';
import { toggleModal } from './actions';

export const showModal = createReducer(false, {
  [toggleModal]: (_, action) => action.payload,
});
