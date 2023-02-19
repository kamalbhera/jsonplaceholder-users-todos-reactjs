import React, { useState } from "react";
import ListItem from "./Comp/ListItem";
//! More optimise way
function ComponentWiseList() {
  const temp = [
    { id: 1, pName: "Kamal" },
    { id: 2, pName: "Aquib" },
    { id: 3, pName: "Alim" },
    { id: 4, pName: "Ahmed" },
    { id: 5, pName: "Rohan" },
  ];
  const [product, setProduct] = useState(temp);
  //! let productList = (); // giving syntax like this means we are adding jsx code
  let productList = product.map((e) => {
    return <ListItem pName={e.pName} key={e.id.toString()} />;
  });
  return <div>{productList}</div>;
}

export default ComponentWiseList;
