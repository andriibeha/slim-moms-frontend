import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const removeProduct = createAsyncThunk(
  'product/removeProduct',
  async (productId, thunkAPI) => {
    try {
      const responce = await axios.remove(`/products/${productId}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
