import React, { useState } from "react";
import ListItem from "./Comp/ListItem";

function ComponentWiseList() {
  const temp = [
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
        return <ListItem pName={e.pName} key={e.id.toString()} />;
      })}
    </div>
  );
}

export default ComponentWiseList;
