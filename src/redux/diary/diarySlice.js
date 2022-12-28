import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getByDate, addProduct, removeProduct } from './diaryOperations';

const initialState = {
  selectedDate: '',
  date: null,
  caloricityPerDay: null,
  dateFirstAdded: '',
  products: [],
  isLoading: false,
  error: null,
};
const actions = [getByDate, addProduct, removeProduct];

const handleAnyFulfield = (state, { payload }) => {
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
        const { result, caloricityPerDay, dateFirstAdded } = payload.data;
        state.products = [...result].reverse();

        state.caloricityPerDay = caloricityPerDay;
        state.dateFirstAdded = dateFirstAdded;
      })
      .addCase(getByDate.rejected, (state, { payload }) => {
        if (payload === 'Request failed with status code 404') {
          state.products = [];
          state.caloricityPerDay = '';
          state.dateFirstAdded = '';
        }
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        const { result } = payload.data;
        state.products = [result, ...state.products];
      })
      .addCase(removeProduct.fulfilled, (state, { payload }) => {
        const idx = state.products.findIndex(item => item.id === payload.id);
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
