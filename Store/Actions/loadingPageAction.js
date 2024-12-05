export const startLoading = (dispatch) => {
  return dispatch({ type: "LOADING" });
};
export const endLoading = (dispatch) => {
  return dispatch && dispatch({ type: "STOP__LOADING" });
};
