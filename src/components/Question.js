import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Question = ({ question: { id, timestamp, author, optionOne, optionTwo } }) => {
  return (
    <div className="question">
      <div className="question-info">
        <p className="name">
          <small>Asked by: </small>
          {author}
        </p>

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
};

Question.propTypes = {
  question: PropTypes.exact({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    optionOne: PropTypes.object.isRequired,
    optionTwo: PropTypes.object.isRequired,
  }).isRequired,
};

export default Question;
