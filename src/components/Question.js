import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Question extends Component {
  render() {
    const { id, timestamp, author, optionOne, optionTwo } = this.props.question;
    return (
      <div>
        Question:
        <p>{author}</p>
        <p>{optionOne.text}</p>
        <p>{optionTwo.text}</p>
        <p>{id}</p>
        <p>{timestamp}</p>
        <Link to={"/questions/" + id}>More</Link>
      </div>
    );
  }
}
