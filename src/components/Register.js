/**
 * TODO: Handle successful registartion with message
 * TODO: Handle server errors and connection errors with message
 * TODO: Create helper module for validating form inputs
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleRegistration } from "../actions/auth";

class Register extends Component {
  state = {
    fields: {
      username: "",
      name: "",
      password: "",
    },
    errors: {},
    registrationSuccess: false,
    shouldRedirect: false,
  };

  validate = () => {
    const { username, name, password } = this.state.fields;
    const errors = {};
    if (username.length > 16) errors["username"] = "Username should have less then 16 characters";
    if (username.length < 3) errors["username"] = "Username should have at least 3 characters";
    if (username === "") errors["username"] = "Username is required";
    if (name === "") errors["name"] = "Name is required";
    if (password.length < 6) errors["password"] = "Password should have at least 6 characters";
    if (password === "") errors["password"] = "Password is required";
    this.setState({ errors: errors });
    return Object.keys(errors).length === 0;
  };

  setResponseErrors = (msg) => {
    const errors = {};
    const field = msg.split(":")[0];
    if (field === "username") errors["username"] = "Username is taken";
    this.setState({ errors: errors });
  };

  handleChange = (e) => {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields: fields,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValidated = this.validate();
    if (isValidated) {
      const { username, name, password } = this.state.fields;
      this.props.dispatch(handleRegistration(username, name, password));
      // const res = await authService.register({
      //   username: this.state.fields.username,
      //   password: this.state.fields.password,
      //   email: this.state.fields.email,
      //   passcode: this.state.fields.passcode,
      // });
      // if (res.success) {
      //   //TODO: handle successful registration with message
      this.setState({ shouldRedirect: true });
      // } else {
      //   this.setResponseErrors(res.error.message);
      // }
    }
  };

  render() {
    const { username, name, password } = this.state.fields;
    if (this.state.shouldRedirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <main>
          <form id="form" action="">
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={this.handleChange}
              />
              <div className="error-msg">{this.state.errors.username}</div>
            </div>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={this.handleChange}
              />
              <div className="error-msg">{this.state.errors.name}</div>
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
              />
              <div className="error-msg">{this.state.errors.password}</div>
            </div>
            <button id="submit-btn" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </main>
      );
    }
  }
}

export default connect()(Register);
