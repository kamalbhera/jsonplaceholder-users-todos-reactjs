import React, { Component } from "react";

export class ClassComponentState11 extends Component {
  state = {
    counter: 0,
    arr: [],
  };
  render() {
    return (
      <div>
        <h1>Hello Class component</h1>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

export default ClassComponentState11;
