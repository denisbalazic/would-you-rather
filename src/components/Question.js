import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Question extends Component {
  render() {
    const { id, timestamp, author, optionOne, optionTwo } = this.props.question;
    return (
      <div className="question">
        <div className="question-info">
          <p className="name">
            <small>Asked by: </small>
            {author}
          </p>
          <div className="avatar"></div>
          <p className="date">{new Date(timestamp).toLocaleDateString()}</p>
        </div>
        <Link to={"/questions/" + id}>
          <div className="question-text">
            <p className="question-option">{optionOne.text}</p>
            <small>-or-</small>
            <p className="question-option">{optionTwo.text}</p>
          </div>
        </Link>
      </div>
    );
  }
}
