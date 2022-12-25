import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios } from 'servises/api';
const API = apiAxios;

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (product, thunkAPI) => {
    try {
      const responce = await API.post(`diary`, product);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'product/removeProduct',
  async (productId, thunkAPI) => {
    try {
      const responce = await API.remove(`products/${productId}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get('bloodproducts/all');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getProductByQuery = createAsyncThunk(
  'product/getProductByQuery',
  async (product, { rejectWithValue }) => {
    try {
      const res = await API.get(`bloodproducts/all/query?title=${product}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
