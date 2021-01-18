import React, { Component } from "react";
import { connect } from "react-redux";
import { handleNewQuestion } from "../actions/shared";

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleNewQuestion(this.state.optionOne, this.state.optionTwo, this.props.authedUser.id)
    );
  };
  render() {
    return (
      <div className="new-question-form">
        <form action="" onSubmit={this.handleSubmit}>
          <textarea
            name="optionOne"
            id=""
            cols="50"
            rows="4"
            onChange={this.handleChange}
          ></textarea>
          <small>-or-</small>
          <textarea
            name="optionTwo"
            id=""
            cols="50"
            rows="4"
            onChange={this.handleChange}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(AddQuestion);
