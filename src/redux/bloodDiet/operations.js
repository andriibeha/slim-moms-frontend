import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios } from 'servises/api';
import { store } from '../store';
import axios from 'axios';

const API = apiAxios;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

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

export const getDietUser = createAsyncThunk(
  'blood',
  async (credentials, thunkAPI) => {
    try {
      token.set(store.getState().auth.token);
      const { data } = await axios.patch('/api/users/update', credentials);
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
