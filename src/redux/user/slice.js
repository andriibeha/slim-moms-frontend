import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userOperation';

const initialState = {
  height: null,
  age: null,
  curWeight: null,
  desWeight: null,
  bloodType: null,
  dailyCalorie: null,
  notRecProducts: null,
};

//ДОПИСАТИ
const userSlice = createSlice({
  name: `user`,
  initialState,
  reducers: {
    changeUserDate(state, action) {
      state = action.payload;
      console.log(state);
    },
  },
  extraReducers: builder =>
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      const {
        height,
        age,
        curWeight,
        desWeight,
        bloodType,
        dailyCalorie,
        notRecProducts,
      } = payload.data.user;
      console.log(
        '#################################################  GET USER'
      );
      console.log(payload.data.user);
      state.height = height;
      state.age = age;
      state.curWeight = curWeight;
      state.desWeight = desWeight;
      state.bloodType = bloodType;
      state.dailyCalorie = dailyCalorie;
      state.notRecProducts = [...notRecProducts];
    }),
});

export const { changeUserDate } = userSlice.actions;
export const userReducer = userSlice.reducer;
