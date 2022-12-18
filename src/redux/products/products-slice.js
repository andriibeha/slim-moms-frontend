import { createSlice } from '@reduxjs/toolkit';
import { removeProduct } from './products-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejcted = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [removeProduct.pending]: handlePending,
    [removeProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.item.findIndex(item => item.id === action.payload.id);
      state.items.splice(index, 1);
      console.log('Product removed');
    },
    [removeProduct.rejected]: handleRejcted,
  },
});

export default productSlice.reducer;
