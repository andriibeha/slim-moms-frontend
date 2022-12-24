import { createSlice } from '@reduxjs/toolkit';
import { logOut, register, logIn, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  bloodType: null,
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.bloodType = null
      state.token = null;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.fulfilled]: (state, action) => {
      state.isLoading = true;
    },

    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.data.token;
      state.bloodType = action.payload.data
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected]: state => {
      state.isLoading = false;
    },

    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.bloodType = null
      state.token = null;
      state.isLoggedIn = false;
    },

    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
