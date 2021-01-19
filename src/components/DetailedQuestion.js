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
    const opt1votes = optionOne.votes.length;
    const opt2votes = optionTwo.votes.length;
    const opt1perc = opt1votes / (opt1votes + opt2votes);
    const opt2perc = opt2votes / (opt1votes + opt2votes);
    const isAnswered = Object.keys(authedUser.answers).indexOf(id) >= 0;
    let option;
    isAnswered && (option = authedUser.answers[id]);
    return (
      <div className="question">
        <h1>Would you rather...</h1>
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
        {isAnswered && (
          <div className="question-stats">
            <p>{opt1votes}</p>
            <p>{opt1perc}</p>
            <p>{opt2votes}</p>
            <p>{opt2perc}</p>
          </div>
        )}
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
