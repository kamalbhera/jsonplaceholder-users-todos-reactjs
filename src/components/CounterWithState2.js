import React, { useState } from "react";
function CounterWithState2() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addValue}>Increment</button>
    </div>
  );
}

export default CounterWithState2;
