import { userLogin } from "./loginSlice";

// ! Action creator
export const validateUser = (loginDet) => {
  //! API Calls
  return (dispatch) => {
    setTimeout(() => {
      //   dispatch({ type: LOGIN, loginDet });
      dispatch(userLogin(loginDet));
    }, 2000);
  };
};
