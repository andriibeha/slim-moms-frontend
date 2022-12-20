import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5001';

export const getDiet = createAsyncThunk(
  'blood',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/bloodproducts', credentials);
      console.log(data);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
