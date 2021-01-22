import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleNewQuestion } from "../actions/shared";

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    shouldRedirect: false,
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleNewQuestion(this.state.optionOne, this.state.optionTwo, this.props.authedUser.id)
    );
    this.setState({ shouldRedirect: true });
  };
  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="new-question-form">
          <h1>Would you rather...</h1>
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
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(AddQuestion);
