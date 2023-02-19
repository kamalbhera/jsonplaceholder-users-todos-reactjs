import loginReducer from "./loginReducer";
import productReducer from "./productReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pr: productReducer,
  lr: loginReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
