import React, { useContext } from "react";
import TotalContext from "./store/total-context";

const UseContextTotal = () => {
  const total = useContext(TotalContext);
  return (
    <div className="customeDiv">
      <h1>Total Component</h1>
      <hr />
      <h2>Total - {total}</h2>
    </div>
  );
};

export default UseContextTotal;
