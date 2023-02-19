import { createStore } from "redux";
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
  users: ["Admin", "Manager", "End-user"],
  loginDet: "None",
};
const reducer = (state = initData, action) => {
  console.log(action);
  if (action.type === "PURCHASED") {
    return {
      //   products: state.products,
      ...state,
      cart: [...state.cart, action.payLoad],
      total: state.total + parseInt(action.payLoad.cost),
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      cart: state.cart.filter((i, index) => index !== action.payLoad.index),
      total: state.total - parseInt(action.payLoad.price),
    };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      loginDet: action.loginDet,
    };
  }
  return state;
};

//! creating a store
const store = createStore(reducer);

export default store;
