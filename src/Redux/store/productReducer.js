import * as actions from "./actions";
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
const productReducer = (state = initData, action) => {
  console.log(action);
  if (action.type === actions.PURCHASED) {
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

  return state;
};

export default productReducer;
