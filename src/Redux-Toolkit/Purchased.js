import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { PURCHASED } from "./store/actions";
import { purchased } from "./store/productSlice";
const Purchased = () => {
  const products = useSelector((state) => state.pr.products);
  const user = useSelector((state) => state.lr.loginDet);
  const dispatch = useDispatch();
  const purchaseHandler = (e) => {
    const pName = e.target.options[e.target.selectedIndex].text;
    const cost = e.target.value;
    let obj = { pName, cost };
    // dispatch({ type: PURCHASED, payLoad: obj }); //it calls the reducer function
    dispatch(purchased(obj)); //in purchased passes as a payload
  };

  return (
    <div className="customeDiv">
      <h3>Purchased Component - Users:- {user}</h3>
      <hr />
      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((product, index) => {
          return (
            <option value={product.cost} key={product.id.toString()}>
              {product.pName} - ${product.cost}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Purchased;
