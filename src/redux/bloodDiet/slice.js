const { createSlice } = require('@reduxjs/toolkit');
const { getDiet, getDietUser, clearState } = require('./operations');

const initialState = {
  data: {},
  isLoading: false,
};

const bloodDietSlice = createSlice({
  name: 'blood',
  initialState,
  extraReducers: {
    [getDiet.pending](state) {
      state.isLoading = true;
    },
    [getDiet.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    [getDiet.rejected](state) {
      state.isLoading = false;
    },
    [getDietUser.pending](state) {
      state.isLoading = true;
    },
    [getDietUser.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    [getDietUser.rejected](state) {
      state.isLoading = false;
    },
    [clearState](state, _) {
      state.data = {};
    },
  },
});

export const bloodDietReducer = bloodDietSlice.reducer;
