import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './operations';
import { toast } from 'react-toastify';

const logInSlice = createSlice({
  name: 'login',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    isLoggedIn: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
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
      }),
});

export const logInReducer = logInSlice.reducer;
