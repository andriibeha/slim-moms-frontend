import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getByDate, addProduct, removeProduct } from './diaryOperations';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};
const actions = [getByDate, addProduct, removeProduct];

const handleAnyFulfield = state => {
  state.isLoading = false;
  state.error = null;
};

const handleAnyPending = state => {
  state.isLoading = true;
};

const handleAnyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getByDate.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        const idx = state.products.findIndex(
          item => item.id === action.payload.id
        );
        state.product.splice(idx, 1);
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handleAnyFulfield
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handleAnyPending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handleAnyRejected
      ),
});

export const diaryReducer = diarySlice.reducer;
