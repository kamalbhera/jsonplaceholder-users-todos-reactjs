import React from "react";

function Footer() {
  const fStyle = {
    backgroundColor: "pink",
    color: "blue",
    fontSize: "26px",
  };
  console.log("Footer Component");
  return (
    <div>
      <h1 style={fStyle}>Footer</h1>
    </div>
  );
}

export default React.memo(Footer);
