import React from "react";
import { useLocation } from "react-router-dom";

function Error404() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Error - 404 - {location.pathname} </h1>
    </div>
  );
}

export default Error404;
