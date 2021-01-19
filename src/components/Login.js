import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleLogin } from "../actions/shared";

class Login extends Component {
  state = {
    username: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogin(this.state.username));
  };
  render() {
    if (this.props.authedUser) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
        </div>
      );
    }
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Login);
