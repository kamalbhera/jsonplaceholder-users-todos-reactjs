//! A pattern which was used in Class based component - Single State
import React, { useState } from "react";

//! Multiple states using useState()
function SingleStateUseState9() {
  //single states
  const [sObj, setObj] = useState({
    count: 0,
    bool: true,
  });
  //function single
  function handleChange(op) {
    let tC = sObj.count;
    if (op === "+") {
      tC++;
      setObj({ ...sObj, count: tC });
    } else {
      tC--;
      setObj({ ...sObj, count: tC });
    }
  }
  return (
    <div>
      <h1>{sObj.count}</h1>
      <button onClick={() => handleChange("+")}>Increment</button>
      <button onClick={() => handleChange("-")}>Decrement</button>
      <h3>{sObj.bool.toString()}</h3>

      <h3>{JSON.stringify(sObj)}</h3>
      <button onClick={() => setObj({ ...sObj, bool: !sObj.bool })}>
        Toggle
      </button>
    </div>
  );
}

export default SingleStateUseState9;
