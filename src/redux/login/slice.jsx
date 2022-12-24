import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './operations';
import { logOut, register } from 'redux/auth/auth-operations';
import { toast } from 'react-toastify';

export const initialState = {
  user: { name: null, email: null },
  bloodType: null,
  token: null,
  isLoading: false,
  isLoggedIn: false,
};

const logInSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.bloodType = null;
        state.token = null;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.bloodType = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        toast.success(`Залогінено. Нотіфікашка тимчасова`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        toast.warn(`${action.payload}`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.bloodType = null;
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export const logInReducer = logInSlice.reducer;
