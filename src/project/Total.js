import React from "react";

function Total(props) {
  return (
    <div className="customeDiv">
      <h1>Total Component</h1>
      <hr />
      <h2>Total - {props.total}</h2>
    </div>
  );
}

export default Total;
