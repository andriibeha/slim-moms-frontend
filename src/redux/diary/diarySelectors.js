const selectProductByDate = state => state.diary.products;
const selectDate = state => state.diary.selectedDate;
const selectCaloricityPerDay = state => state.diary.caloricityPerDay;
const selectDateFirstAdded = state => state.diary.dateFirstAdded;
const selectIsLoading = state => state.diary.isLoading;
const selectError = state => state.diary.error;


export const diarySelectors = {
  selectProductByDate,
  selectDate,
  selectCaloricityPerDay,
  selectDateFirstAdded,
  selectIsLoading,
  selectError,

};