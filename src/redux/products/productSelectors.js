const selectProductsByQuery = state =>
  state.products.productsByQuery.queryProducts;

export const productSelectors = {
  selectProductsByQuery,
};
