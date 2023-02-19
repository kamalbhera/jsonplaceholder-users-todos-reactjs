import { createSlice } from "@reduxjs/toolkit";
//! 1. creating a reducer function
const initData = {
  products: [
    { id: 1, pName: "Apple", cost: 20 },
    { id: 2, pName: "Mango", cost: 30 },
    { id: 3, pName: "Banana", cost: 40 },
    { id: 4, pName: "Grapes", cost: 50 },
  ],
  cart: [],
  total: 0,
};

const productSlice = createSlice({
  name: "purchased",
  initialState: initData,
  reducers: {
    purchased: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + parseInt(action.payload.cost);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (i, index) => index !== action.payload.index
      );
      state.total = state.total - parseInt(action.payload.price);
    },
  },
});

export const { purchased, deleteItem } = productSlice.actions;
export default productSlice.reducer;
