import React, { useState } from "react";
import "../../src/App.css";

function Main() {
  // making two states
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const products = [
    { id: 1, pName: "Apple", pCost: 40 },
    { id: 2, pName: "Banana", pCost: 70 },
    { id: 3, pName: "Mango", pCost: 10 },
    { id: 4, pName: "Custard", pCost: 50 },
    { id: 5, pName: "Grapes", pCost: 200 },
  ];

  const handleChange = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let pCost = e.target.value;
    let tCart = [...cart];
    let obj = { pName, pCost };
    let tPrice = parseInt(pCost);
    tPrice = total + tPrice;
    tCart.push(obj);

    setCart(tCart);
    setTotal(tPrice);
  };
  return (
    <div>
      <div className="customeDiv">
        <h1>Purchased Component</h1>
        <hr />
        <select onChange={handleChange}>
          {products.map((product) => {
            return (
              <option value={product.pCost} key={product.id}>
                {product.pName} - {product.pCost}
              </option>
            );
          })}
        </select>
      </div>
      <div className="customeDiv">
        <h1>Cart Component</h1>
        <hr />
        <ul>
          {cart.map((product, index) => {
            return <li key={index.toString()}>{product.pName}</li>;
          })}
        </ul>
      </div>
      <div className="customeDiv">
        <h1>Total Component</h1>
        <hr />
        <h2>Total - {total}</h2>
      </div>
    </div>
  );
}

export default Main;
