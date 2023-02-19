import React, { useState } from "react";

function LazyInitialization3() {
  //! Expensive call -- maan lo ye expensive process hai, isko deal humlg lazy INintliazation se karnge
  function initializeProcess() {
    console.log("Expensive Process", Date.now());
    return 0;
  }
  // states
  const [count, setCount] = useState(() => initializeProcess()); //function is not getting called now

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LazyInitialization3;
