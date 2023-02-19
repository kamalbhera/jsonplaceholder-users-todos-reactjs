import React, { Component, createRef } from "react";

export class RefsModern18 extends Component {
  //! if we want to use this modern ref then must call in constructor function
  constructor(props) {
    super(props);
    ///! Creating refs Here
    this.inputOne = createRef();
    this.inputTwo = createRef();
  }
  componentDidMount() {
    this.inputOne.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="First Input" ref={this.inputOne} />
        <br />
        <input type="text" placeholder="Second Input" ref={this.inputTwo} />
        <br />
        <button onClick={() => this.inputTwo.current.focus()}>Set Focus</button>
      </div>
    );
  }
}

export default RefsModern18;
