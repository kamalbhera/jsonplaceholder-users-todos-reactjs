import React from "react";

function DisplayFlag(props) {
  const fStyle = {
    fontSize: "30px",
  };
  console.log("Display Flag");
  return (
    <div>
      <h1 style={fStyle}>Flag: {props.flag.toString()}</h1>
    </div>
  );
}

export default React.memo(DisplayFlag);
