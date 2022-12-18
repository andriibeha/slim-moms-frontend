import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './operations';
import { toast } from 'react-toastify';

const logInSlice = createSlice({
  name: 'login',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.pending, state => {
        state.isLoading = true;
        console.log('pending', state);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log('pending', state);
        console.log('pending', action);
      })
      .addCase(logIn.rejected, (state, action) => {
        console.log('rejected', state);
        console.log('rejected', action);
        state.isLoading = false;
        toast.warn(`Error`, {
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
