import { createSlice } from '@reduxjs/toolkit';
import {logOut, register} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]:(state, action) => {
      state.user = action.payload;
      state.token = null;
      state.isLoggedIn = true;
        },
    [logOut.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
