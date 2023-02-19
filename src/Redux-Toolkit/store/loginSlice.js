import { createSlice } from "@reduxjs/toolkit";
const initData = {
  users: ["Admin", "Manager", "End-user"],
  loginDet: "None",
};
const loginSlice = createSlice({
  name: "login",
  initialState: initData,
  reducers: {
    userLogin: (state, action) => {
      state.loginDet = action.payload;
    },
  },
});

export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;

//! now create a store with a method called configureStore
