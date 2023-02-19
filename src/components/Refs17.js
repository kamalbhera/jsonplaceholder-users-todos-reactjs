//! class component refs
import React, { Component } from "react";

export class Refs17 extends Component {
  //! When document relaod then autofocus on first input box
  componentDidMount() {
    this.inputElement.focus();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="First Input"
          ref={(elem1) => (this.inputElement = elem1)}
        />
        <br />
        <input
          type="text"
          placeholder="Second Input"
          ref={(elem) => (this.iElement = elem)}
        />
        <br />
        <button onClick={() => this.iElement.focus()}>SetFocus</button>
      </div>
    );
  }
}

export default Refs17;
