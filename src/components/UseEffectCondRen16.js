import React, { useState } from "react";
import UseEffectShowXY16b from "./UseEffectShowXY16b";
// ! *** ComponentWillUnmount() - cleaning effect
function UseEffectCondRen16() {
  const [showData, changeData] = useState(true);
  return (
    <div>
      {showData ? <UseEffectShowXY16b /> : <h1>No data to show</h1>}
      <button onClick={() => changeData(!showData)}>Toggle</button>
    </div>
  );
}

export default UseEffectCondRen16;
