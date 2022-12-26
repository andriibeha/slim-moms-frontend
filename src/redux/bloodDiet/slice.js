const { createSlice } = require('@reduxjs/toolkit');
const { getDiet, getDietUser, clearState } = require('./operations');

const initialState = {
  data: {},
};

const bloodDietSlice = createSlice({
  name: 'blood',
  initialState,
  extraReducers: {
    [getDiet.fulfilled](state, action) {
      state.data = action.payload;
    },
    [getDietUser.fulfilled](state, action) {
      state.data = action.payload;
    },
    [clearState](state, _) {
      state.data = {};
    },
  },
});

export const bloodDietReducer = bloodDietSlice.reducer;
