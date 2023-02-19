// ! Global store
//!  using MyContext.Consumer
import React from "react";
import TotalContext from "./store/total-context";

function Total() {
  return (
    <TotalContext.Consumer>
      {(total) => {
        return (
          <div className="customeDiv">
            <h1>Total Component</h1>
            <hr />
            <h2>Total - {total}</h2>
          </div>
        );
      }}
    </TotalContext.Consumer>
  );
}

export default Total;
