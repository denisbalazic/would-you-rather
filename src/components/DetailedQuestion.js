import React, { Component } from "react";
import { connect } from "react-redux";
import { handleVote } from "../actions/shared";

class DetailedQuestion extends Component {
  handleVote = (questionId, option) => {
    this.props.dispatch(handleVote(this.props.authedUser.id, questionId, option));
  };
  render() {
    const { questions, authedUser, match } = this.props;
    const question = Object.values(questions).find((q) => q.id === match.params.questionId);
    const { author, optionOne, optionTwo, id, timestamp } = question;
    const isAnswered = Object.keys(authedUser.answers).indexOf(id) >= 0;
    let option;
    isAnswered && (option = authedUser.answers[id]);
    return (
      <div>
        DetailedQuestion
        <p>{author}</p>
        <p>{optionOne.text}</p>
        <p>{option === "optionOne" ? "THIS IS ONE" : null}</p>
        <button onClick={() => this.handleVote(id, "optionOne")}>opt1</button>
        <p>{optionTwo.text}</p>
        <p>{option === "optionTwo" ? "THIS IS ONE" : null}</p>
        <button onClick={() => this.handleVote(id, "optionTwo")}>opt2</button>
        <p>{id}</p>
        <p>{timestamp}</p>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(DetailedQuestion);
