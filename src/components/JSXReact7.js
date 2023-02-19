import React from "react";

function JSXReact7() {
  let msg = React.createElement("h1", { style: { color: "blue" } }, "hello!");

  let a = 10,
    b = 20;
  let total = <h1>{a + b}</h1>;
  return (
    <div className="App">
      {msg}
      {total}
    </div>
  );
}

export default JSXReact7;
