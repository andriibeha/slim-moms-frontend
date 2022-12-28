import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { store } from '../store';
import { apiAxios, apiToken } from '../../servises/api';

/* const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
 */

export const getDiet = createAsyncThunk(
  'blood',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.post('bloodproducts', credentials);
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
      apiToken.set(store.getState().auth.token);
      const { data } = await apiAxios.patch('users/update', credentials);
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

export const clearState = createAction('data/clearState');
