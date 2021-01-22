import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleLogin } from "../actions/auth";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogin(this.state.username, this.state.password));
  };
  render() {
    if (this.props.authedUser) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <form action="" onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>

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
