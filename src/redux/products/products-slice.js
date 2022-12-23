import { createSlice } from '@reduxjs/toolkit';
import {
  removeProduct,
  getAllProducts,
  getProductByQuery,
} from './products-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejcted = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleProducts = (state, { payload }) => {
  state.error = null;
  state.items = payload;
};

const handleProductsByQuery = (state, { payload }) => {
  state.error = null;
  state.productsByQuery = payload;
};

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    productsByQuery: [],
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
    [getAllProducts.pending]: handlePending,
    [getAllProducts.fulfilled]: handleProducts,
    [getAllProducts.rejected]: handleRejcted,
    [getProductByQuery.pending]: handlePending,
    [getProductByQuery.fulfilled]: handleProductsByQuery,
    [getProductByQuery.rejected]: handleRejcted,
  },
});

export default productSlice.reducer;
