import React, { useState } from "react";

function EventsReact6() {
  //making a states
  const [count, setCount] = useState(0);
  //single function to handle increment and decrement
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
      <button onClick={() => handleChange("+")}>(+)</button>
      <button onClick={() => handleChange("-")}>(-)</button>
    </div>
  );
}

export default EventsReact6;
