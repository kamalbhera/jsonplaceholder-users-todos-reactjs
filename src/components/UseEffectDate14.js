import React, { useEffect, useState } from "react";

function UseEffectDate14() {
  const [cTime, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });
  return (
    <div>
      <h1>{cTime}</h1>
      <button onClick={() => setTime(new Date().toLocaleString())}>
        Refresh
      </button>
    </div>
  );
}

export default UseEffectDate14;
