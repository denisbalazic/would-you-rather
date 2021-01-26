import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { handleVote } from "../actions/shared";
import NotFound from "../components/NotFound";

class DetailedQuestion extends Component {
  handleVote = (questionId, option) => {
    this.props.dispatch(handleVote(this.props.authedUser.id, questionId, option));
  };
  render() {
    const { questions, users, authedUser, match } = this.props;
    const question = questions.find((q) => q.id === match.params.questionId);
    if (question) {
      const { author, optionOne, optionTwo, id, timestamp } = question;
      const user = users.find((u) => u.id === author);
      const { name, avatarURL } = user;
      const opt1votes = optionOne.votes.length;
      const opt2votes = optionTwo.votes.length;
      const sumvotes = opt1votes + opt2votes;
      const opt1perc = Math.round((opt1votes * 100) / sumvotes);
      const opt2perc = Math.round((opt2votes * 100) / sumvotes);
      const isAnswered = Object.keys(authedUser.answers).indexOf(id) >= 0;
      let option;
      isAnswered && (option = authedUser.answers[id]);
      return (
        <div className="question">
          <h1>Would you rather...</h1>
          <div className="question-info">
            <p className="name">
              <small>Asked by: </small>
              {name}
            </p>
            <div className="avatar">
              <img src={avatarURL} alt="" />
            </div>
            <p className="date">{new Date(timestamp).toLocaleDateString()}</p>
          </div>
          <div className="question-text">
            <div className="question-option">
              <p className="one">...{optionOne.text}?</p>
              <div className="vote">
                {isAnswered ? (
                  option === "optionOne" && <i className="fas fa-check"></i>
                ) : (
                  <button onClick={() => this.handleVote(id, "optionOne")}>vote</button>
                )}
              </div>
            </div>
            <small>-or-</small>
            <div className="question-option">
              <p className="two">...{optionTwo.text}?</p>
              <div className="vote">
                {isAnswered ? (
                  option === "optionTwo" && <i className="fas fa-check"></i>
                ) : (
                  <button onClick={() => this.handleVote(id, "optionTwo")}>vote</button>
                )}
              </div>
            </div>
          </div>
          {isAnswered && (
            <div className="question-stats">
              <div className="option one" style={{ width: `${opt1perc}%` }}>
                <p>
                  {opt1votes}/{sumvotes}
                </p>
                <p>{opt1perc}%</p>
              </div>
              <div className="option two" style={{ width: `${opt2perc}%` }}>
                <p>
                  {opt2votes}/{sumvotes}
                </p>
                <p>{opt2perc}%</p>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return <NotFound />;
    }
  }
}

DetailedQuestion.propTypes = {
  questions: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  authedUser: PropTypes.object.isRequired,
};

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions: Object.values(questions),
    users: Object.values(users),
    authedUser,
  };
}

export default connect(mapStateToProps)(DetailedQuestion);
