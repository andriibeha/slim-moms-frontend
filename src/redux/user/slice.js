import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDate: {
    height: '',
    age: '',
    cWeight: '',
    dWeight: '',
    blood: null,
  },
};

const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    changeUserDate(state, action) {
      state.userDate = action.payload;
      console.log(state.userDate);
    },
  },
});

export const { changeUserDate } = userSlice.actions;
export const userReducer = userSlice.reducer;
