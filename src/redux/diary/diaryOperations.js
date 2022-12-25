import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios } from 'servises/api';
const API = apiAxios;

export const getByDate = createAsyncThunk(
  'diary/getByDate',
  async (date, thunkAPI) => {
    try {
      const res = await API.get(`diary?date=${date}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addProduct = createAsyncThunk(
  'diary/addProduct',
  async (product, thunkAPI) => {
    try {
      const res = await API.post(`diary`, product);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'diary/removeProduct',
  async (productId, thunkAPI) => {
    try {
      const res = await API.delete(`diary/${productId}`);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
