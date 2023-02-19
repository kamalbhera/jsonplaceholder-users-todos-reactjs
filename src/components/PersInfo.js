import React from "react";

function PersInfo(props) {
  console.log(props); // list of object
  //   ! Object destructuring
  const { name, age } = props;
  return (
    <div className="prof-card">
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}

export default PersInfo;
