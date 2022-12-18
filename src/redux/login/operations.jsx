import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// --- for LogOut ---
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const logIn = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
