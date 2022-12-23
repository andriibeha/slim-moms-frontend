import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('api/auth/register', credentials);
    console.log(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/api/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});
