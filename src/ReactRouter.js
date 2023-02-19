import React from "react";
import About from "./Router/About";
import Home from "./Router/Home";
import Product from "./Router/Product";
import { Route, Link, Switch, Redirect, NavLink } from "react-router-dom";
import Tutorial from "./Router/Tutorial";
import Tdetails from "./Router/Tdetails";
import Error404 from "./Router/Error404";

function ReactRouter() {
  return (
    <div>
      <ul>
        <li className="mainMenu">
          <NavLink
            activeClassName="selected"
            to="/home"
            activeStyle={{ fontWeight: "bold", color: "Red" }}
          >
            Home
          </NavLink>
        </li>
        <li className="mainMenu">
          <NavLink
            activeClassName="selected"
            to="/product"
            activeStyle={{ fontWeight: "bold", color: "Red" }}
          >
            Product
          </NavLink>
        </li>
        <li className="mainMenu">
          <NavLink
            activeClassName="selected"
            to="/tutorial"
            isActive={(match, location) => {
              console.log(match, location);
            }}
            activeStyle={{ fontWeight: "bold", color: "Red" }}
          >
            Tutorial
          </NavLink>
        </li>
        <li className="mainMenu">
          <NavLink
            activeClassName="selected"
            to="/about"
            activeStyle={{ fontWeight: "bold", color: "Red" }}
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tutorial">
          <Tutorial />
        </Route>
        <Route path="/tutorial/:title">
          <Tdetails />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default ReactRouter;
