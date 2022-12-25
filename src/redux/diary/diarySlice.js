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

const handleAnyFulfield = (state, action) => {
  state.dateFirstAdded = action.payload.dateFirstAdded;
  state.calorisityPerDay = action.payload.calorisityPerDay;
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
      .addCase(getByDate.fulfilled, (state, action) => {
        state.products = [...action.payload.products];
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        const idx = state.products.findIndex(
          item => item.id === action.payload.id
        );
        state.products.splice(idx, 1);
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
