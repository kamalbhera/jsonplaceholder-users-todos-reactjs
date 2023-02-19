import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.pr.total);
  const user = useSelector((state) => state.pr.loginDet);
  return (
    <div className="customeDiv">
      <h3>Total Component - Users:- {user}</h3>
      <hr />
      <h3>Total - {total}</h3>
    </div>
  );
};

export default Total;
