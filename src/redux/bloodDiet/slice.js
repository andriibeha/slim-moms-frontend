const { createSlice } = require('@reduxjs/toolkit');
const { getDiet } = require('./operations');

const initialState = {
  data: {},
};

const bloodDietSlice = createSlice({
  name: 'blood',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDiet.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const bloodDietReducer = bloodDietSlice.reducer;
