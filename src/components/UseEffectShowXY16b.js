import React, { useEffect, useState } from "react";

function UseEffectShowXY16b() {
  const [stringXY, changeXy] = useState("0.0");
  const displayXY = (e) => {
    let str = `${e.pageX} , ${e.pageY}`;
    changeXy(str);
    console.log(str);
  };
  useEffect(() => {
    console.log("Use effect");
    window.addEventListener("mousemove", displayXY);
    return () => {
      console.log("Clean Up code");
      window.removeEventListener("mousemove", displayXY); //! Please add this line to remove the subscription
    };
  });
  return (
    <div>
      <h1>{stringXY}</h1>
    </div>
  );
}

export default UseEffectShowXY16b;
