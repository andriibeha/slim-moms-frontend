import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiToken, apiAxios } from 'servises/api';

const token = apiToken;
const API = apiAxios;
// axios.defaults.baseURL = 'http://localhost:5001';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };
// нащо в реєстрації вертать щось, якщо ми це не використовуємо
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await API.post('auth/register', credentials);
    console.log(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await API.get('auth/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await API.get('users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
