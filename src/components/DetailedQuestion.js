import React, { Component } from "react";
import { connect } from "react-redux";
import { handleVote } from "../actions/shared";

class DetailedQuestion extends Component {
  handleVote = (questionId, option) => {
    this.props.dispatch(handleVote(this.props.authedUser.id, questionId, option));
  };
  render() {
    const { questions, authedUser, match } = this.props;
    const question = questions.find((q) => q.id === match.params.questionId);
    const { author, optionOne, optionTwo, id, timestamp } = question;
    const isAnswered = Object.keys(authedUser.answers).indexOf(id) >= 0;
    let option;
    isAnswered && (option = authedUser.answers[id]);
    return (
      <div className="question">
        <div className="question-info">
          <p>Asked by: {author}</p>
          <p className="question-date">{new Date(timestamp).toLocaleDateString()}</p>
        </div>
        <div className="question-text">
          <div className="question-option">
            <p>{optionOne.text}</p>
            <div className="vote">
              <p>{option === "optionOne" ? "THIS IS ONE" : null}</p>
              {!isAnswered && (
                <button onClick={() => this.handleVote(id, "optionOne")}>opt1</button>
              )}
            </div>
          </div>
          <small>-or-</small>
          <div className="question-option">
            <p>{optionTwo.text}</p>
            <div className="vote">
              <p>{option === "optionTwo" ? "THIS IS ONE" : null}</p>
              {!isAnswered && (
                <button onClick={() => this.handleVote(id, "optionTwo")}>opt2</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questions: Object.values(questions),
    authedUser,
  };
}

export default connect(mapStateToProps)(DetailedQuestion);
