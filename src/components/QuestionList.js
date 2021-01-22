import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

//filter questions based on showAnswered state and authedUser answers
function selectQuestions(questions, answered, showAnswered) {
  if (questions.length > 0 && answered.length > 0) {
    return questions
      .filter((q) => {
        if (showAnswered) {
          return answered.indexOf(q.id) >= 0;
        } else {
          return answered.indexOf(q.id) < 0;
        }
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  } else {
    return [];
  }
}

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
    const { questions, answered } = this.props;
    const selectedQuestions = selectQuestions(questions, answered, this.state.showAnswered);
    return (
      <div className="questionlist">
        <button onClick={this.showUnanswered}>Unanswered</button>
        <button onClick={this.showAnswered}>Answered</button>
        <h1>Would you rather...?</h1>
        {selectedQuestions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questions: Object.values(questions),
    answered: authedUser ? Object.keys(authedUser.answers) : [],
  };
}

export default connect(mapStateToProps)(QuestionList);
