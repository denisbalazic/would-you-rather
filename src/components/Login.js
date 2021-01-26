import React, { Component } from "react";
import PropTypes from "prop-types";
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
    this.setState({ username: "", password: "" });
  };

  render() {
    let prevLocation = "/";
    this.props.location.state && (prevLocation = this.props.location.state.referrer);
    if (this.props.authedUser) {
      return <Redirect to={prevLocation} />;
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
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
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

Login.propTypes = {
  authedUser: PropTypes.object,
};

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Login);
