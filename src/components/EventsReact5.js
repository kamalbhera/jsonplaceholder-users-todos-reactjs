import React, { useState } from "react";

function EventsReact5() {
  //making a states
  const [count, setCount] = useState(0);

  //making a functions
  function addValue() {
    setCount(count + 1);
  }
  function minValue() {
    setCount(count - 1);
  }

  //styling
  const styling = {
    backgroundColor: "salmon",
    fontSize: "10px",
  };
  return (
    <div>
      <h1>{count}</h1>
      <button style={{ backgroundColor: "red" }} onClick={addValue}>
        (+)
      </button>
      <button style={styling} onClick={minValue}>
        (-)
      </button>
    </div>
  );
}

export default EventsReact5;
