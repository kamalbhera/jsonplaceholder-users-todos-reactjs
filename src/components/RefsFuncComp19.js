import React, { useRef, useEffect } from "react";

function RefsFuncComp19() {
  const textOne = useRef(null); //object
  const textTwo = useRef(null); //objct
  // ! useEffect is for lifecycle - here mounting phase
  useEffect(() => textOne.current.focus());
  return (
    <div>
      <input type="text" placeholder="1st Box" ref={textOne} />
      <br />
      <input type="text" placeholder="2nd Box" ref={textTwo} />
      <br />
      <button onClick={() => textTwo.current.focus()}>Focus On</button>
    </div>
  );
}

export default RefsFuncComp19;
