import React, { useState } from "react";

function RenderListArrObj() {
  let temp = [
    { id: 1, pName: "Kamal" },
    { id: 2, pName: "Aquib" },
    { id: 3, pName: "Alim" },
    { id: 4, pName: "Ahmed" },
    { id: 5, pName: "Rohan" },
  ];
  const [product, setProduct] = useState(temp);
  return (
    <div>
      {product.map((e) => {
        return <li key={e.id.toString()}>{e.pName}</li>;
      })}
    </div>
  );
}

export default RenderListArrObj;
