import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionList extends Component {
  state = {
    showAnswered: false,
  };
  showAnswered = () => {
    this.setState({ showAnswered: true });
  };
  showUnanswered = () => {
    this.setState({ showAnswered: false });
  };
  render() {
    const { questions, authedUser } = this.props;
    let selectedQuestions = [];
    if (Object.keys(questions).length > 0 && authedUser !== null) {
      selectedQuestions = Object.values(questions).filter((q) => {
        //filter questions based on showAnswered state and authedUser answers
        if (this.state.showAnswered) {
          return Object.keys(authedUser.answers).indexOf(q.id) >= 0;
        } else {
          return Object.keys(authedUser.answers).indexOf(q.id) < 0;
        }
      });
      selectedQuestions.sort((a, b) => b.timestamp - a.timestamp);
    }
    return (
      <div>
        <button onClick={this.showUnanswered}>Unanswered</button>
        <button onClick={this.showAnswered}>Answered</button>
        QuestionList:
        {selectedQuestions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
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

export default connect(mapStateToProps)(QuestionList);
