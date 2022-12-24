import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getByDate, addProduct, removeProduct } from './diaryOperations';

const initialState = {
  selectedDate: '',
  calorisityPerDay: 0,
  dateFirstAdded: '',
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
  reducers: {
    setDate(state, { payload }) {
      state.selectedDate = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getByDate.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        // state.date = payload.date;
        state.dateFirstAdded = payload.dateFirstAdded;
        state.calorisityPerDay = payload.calorisityPerDay;
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

export const { setDate } = diarySlice.actions;
export const diaryReducer = diarySlice.reducer;
