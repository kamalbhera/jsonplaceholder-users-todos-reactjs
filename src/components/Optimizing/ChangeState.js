import React from "react";

function ChangeState(props) {
  const cStyle = {
    padding: "26px",
  };
  console.log("Change State");
  return (
    <div>
      <button style={cStyle} onClick={props.click}>
        {props.caption}
      </button>
    </div>
  );
}

export default React.memo(ChangeState);
