import React from "react";

function CounterWithoutState() {
  let i = 0;
  const addValue = () => {
    i++;
    console.log(i); //increasing perfectly on console
  };
  return (
    <div>
      <h1>{i}</h1>
      <button onClick={addValue}>Increment</button>
    </div>
  );
}

export default CounterWithoutState;
