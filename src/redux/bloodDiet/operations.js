import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios } from 'servises/api';

const API = apiAxios;

export const getDiet = createAsyncThunk(
  'blood',
  async (credentials, thunkAPI) => {
    try {
      const { data } = API.post('bloodproducts', credentials);
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
