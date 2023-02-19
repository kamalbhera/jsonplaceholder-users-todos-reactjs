import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    pr: productSlice,
    lr: loginSlice,
  },
});

export default store;
