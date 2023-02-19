import React, { useState } from "react";

//! Multiple states using useState()
function PrimtiveTypeObj8() {
  //multiples states
  const [count, setCount] = useState(0);
  const [bool, setbool] = useState(true);
  //function single
  function handleChange(op) {
    if (op === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleChange("+")}>Increment</button>
      <button onClick={() => handleChange("-")}>Decrement</button>
      <h3>{bool.toString()}</h3>
      <button onClick={() => setbool(!bool)}>Toggle</button>
    </div>
  );
}

export default PrimtiveTypeObj8;
