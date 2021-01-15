import React, { Component } from "react";

export default class Question extends Component {
  render() {
    const { id, author, optionOne, optionTwo } = this.props.question;
    return (
      <div>
        Question:
        <p>{author}</p>
        <p>{optionOne.text}</p>
        <p>{optionTwo.text}</p>
        <p>{id}</p>
      </div>
    );
  }
}
