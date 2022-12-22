const selectProductByDate = state => state.diary.products;
const selectDate = state => state.diary.date;
const selectCalorisityPerDay = state => state.diary.calorisityPerDay;
const selectDateFirstAdded = state => state.diary.dateFirstAdded;

export const diarySelectors = {
  selectProductByDate,
  selectDate,
  selectCalorisityPerDay,
  selectDateFirstAdded,
};
