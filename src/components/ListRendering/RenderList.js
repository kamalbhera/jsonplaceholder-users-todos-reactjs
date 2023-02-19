import React, { useState } from "react";

function RenderList() {
  let arr = ["Apple", "Orange", "Banana", "grapes"];
  const [products, setProduct] = useState(arr);
  return (
    <div>
      {products.map((elem, index) => {
        return <li key={index.toString()}>{elem}</li>;
      })}
    </div>
  );
}

export default RenderList;
