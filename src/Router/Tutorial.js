import React from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import Tdetails from "./Tdetails";

function Tutorial() {
  //   const match = useRouteMatch();
  const { url, path } = useRouteMatch();
  //   console.log(match);

  return (
    <div>
      <ul>
        <h1>Tutorial List</h1>
        <li>
          <Link to={`${url}/js?price=$400`}>JS</Link>
        </li>
        <li>
          <Link to={`${url}/regex?price=$500`}>Regex</Link>
        </li>
        <li>
          <Link to={`${url}/react?price=$700`}>React</Link>
        </li>
        <li>
          <Link to={`${url}/node?price=$800`}>Node</Link>
        </li>
        <li>
          <Link to={`${url}/typescript?price=$40`}>Typescript</Link>
        </li>
      </ul>
      <Route path={`${path}/:title`}>
        <Tdetails />
      </Route>
    </div>
  );
}

export default Tutorial;
