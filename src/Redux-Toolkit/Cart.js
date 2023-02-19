import React from "react";
// import { DELETE } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "./store/productSlice";

const Cart = () => {
  const cart = useSelector((state) => state.pr.cart);
  const user = useSelector((state) => state.lr.loginDet);

  const dispatch = useDispatch();
  const handlerDelete = (index, price) => {
    // dispatch({ type: DELETE, payLoad: { index, price } });
    dispatch(deleteItem({ index, price }));
  };
  return (
    <div className="customeDiv">
      <h3>Cart Component - Users:- {user} </h3>
      <hr />
      <ul>
        {cart.map((item, index) => {
          return (
            <li onClick={() => handlerDelete(index, item.cost)} key={item.id}>
              {item.pName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
