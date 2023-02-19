import React, { useState } from "react";
import "../../src/App.css";
import Cart from "./Cart";
import Total from "./Total";

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
      <Cart cart={cart} />
      <Total total={total} />
    </div>
  );
}

export default Main;
