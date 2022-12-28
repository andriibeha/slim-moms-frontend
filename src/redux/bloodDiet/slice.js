const { createSlice } = require('@reduxjs/toolkit');
const { getDiet, getDietUser, clearState } = require('./operations');

const initialState = {
  data: {},
  isLoading: false,
  error: false,
};

const bloodDietSlice = createSlice({
  name: 'blood',
  initialState,
  extraReducers: {
    [getDiet.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [getDiet.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [getDiet.rejected](state) {
      state.isLoading = false;
      state.error = true;
    },
    [getDietUser.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [getDietUser.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [getDietUser.rejected](state) {
      state.isLoading = false;
      state.error = true;
    },
    [clearState](state, _) {
      state.data = {};
    },
  },
});

export const bloodDietReducer = bloodDietSlice.reducer;
