import React, { Component } from "react";

export class LifeCycleMethods12 extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    console.log("ComponentDIdMount called");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount Called");
  }
  shouldComponentUpdate() {
    return false; //Stopped the render method to render
  }
  render() {
    console.log("Rendered Called");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increase
        </button>
      </div>
    );
  }
}

export default LifeCycleMethods12;
