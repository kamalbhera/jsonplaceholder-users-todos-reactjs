import React, { useEffect, useState } from "react";

function UseEffectSkipStates15() {
  let gCnt = 0;
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(true);
  useEffect(() => {
    console.log("Effect called", gCnt++);
  }, [bool]);
  //   watching only what states given

  return (
    <div>
      <h1>{count}</h1>
      <h2>{bool.toString()}</h2>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setBool(!bool)}>Toggle</button>
    </div>
  );
}

export default UseEffectSkipStates15;
