const selectProductByDate = state => state.diary.products;
const selectDate = state => state.diary.selectedDate;
const selectCalorisityPerDay = state => state.diary.calorisityPerDay;
const selectDateFirstAdded = state => state.diary.dateFirstAdded;
const selectIsLoading = state => state.diary.isLoading;
const selectError = state => state.diary.error;

export const diarySelectors = {
  selectProductByDate,
  selectDate,
  selectCalorisityPerDay,
  selectDateFirstAdded,
  selectIsLoading,
  selectError,
};
