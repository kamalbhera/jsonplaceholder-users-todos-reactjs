import React from "react";

function Cart(props) {
  return (
    <div className="customeDiv">
      <h1>Cart Component</h1>
      <hr />
      <ul>
        {props.cart.map((product, index) => {
          return <li key={index.toString()}>{product.pName}</li>;
        })}
      </ul>
    </div>
  );
}

export default Cart;
