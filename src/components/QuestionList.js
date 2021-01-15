import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionList extends Component {
  render() {
    const { questions, authedUser } = this.props;
    return (
      <div>
        QuestionList:
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
    authedUser,
  };
}

export default connect(mapStateToProps)(QuestionList);
