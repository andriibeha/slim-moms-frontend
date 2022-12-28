const selectBloodByDate = state => state.bloodDiet.data;
const selectBloodIsLoading = state => state.bloodDiet.isLoading;
const selectBloodError = state => state.bloodDiet.error;

export const bloodSelectors = {
  selectBloodByDate,
  selectBloodError,
  selectBloodIsLoading,
};
