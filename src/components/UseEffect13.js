import React, { useState, useEffect } from "react";

function UseEffect13() {
  //! making a state
  const [count, setCount] = useState(0);
  //hooks
  useEffect(() => {
    console.log("useEffect called - ", count);
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect13;
