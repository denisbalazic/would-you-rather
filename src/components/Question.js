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
          <div className="avatar">
            <img src={"/images/023-man.png"} alt="" />
          </div>
          <p className="date">{new Date(timestamp).toLocaleDateString()}</p>
        </div>
        <Link to={"/questions/" + id}>
          <div className="question-text">
            <div className="question-option">
              <p>...{optionOne.text}?</p>
            </div>
            <small>-or-</small>
            <div className="question-option">
              <p>...{optionTwo.text}?</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
