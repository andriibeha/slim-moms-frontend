const selectUserDailyCalorie = state => state.user.dailyCalorie;
const selectUserNotRecProducts = state => state.user.notRecProducts;

export const userSelector = {
  selectUserDailyCalorie,
  selectUserNotRecProducts,
};
