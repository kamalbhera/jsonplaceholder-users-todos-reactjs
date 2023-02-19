import React from "react";

function Header() {
  const hStyle = {
    backgroundColor: "red",
    fontSize: "26px",
  };
  console.log("Header Component");
  return (
    <div>
      <h1 style={hStyle}>Header Box</h1>
    </div>
  );
}

export default React.memo(Header);
