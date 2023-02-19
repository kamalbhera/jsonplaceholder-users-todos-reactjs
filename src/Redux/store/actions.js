export const LOGIN = "LOGIN";
export const PURCHASED = "PURCHASED";
export const DELETE = "DELETE";

// ! Action creator
export const validateUser = (loginDet) => {
  //! API Calls
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: LOGIN, loginDet });
    }, 2000);
  };
};
