import React from "react";

function DisplayCounter(props) {
  const cStyle = {
    fontSize: "30px",
  };
  console.log("Display Counter");
  return (
    <div>
      <h1 style={cStyle}>Counter: {props.Counter}</h1>
    </div>
  );
}

export default React.memo(DisplayCounter);
