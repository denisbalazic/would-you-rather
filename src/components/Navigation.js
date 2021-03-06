import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleLogout } from "../actions/auth";
import PropTypes from "prop-types";

// import "./Navigation.css";

class Navigation extends Component {
  handleLogout = () => {
    this.props.dispatch(handleLogout());
  };
  render() {
    if (this.props.authedUser) {
      return (
        <nav className="Navigation">
          <div className="menu">
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/add">Add Pool</NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
              </li>
            </ul>
          </div>

          <div className="auth-menu">
            <small>{this.props.authedUser.name}</small>
            <button onClick={this.handleLogout}>
              <i className="fas fa-user-minus"></i>
            </button>
          </div>
        </nav>
      );
    } else {
      return (
        <nav>
          <div className="menu">
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
          <div className="auth-menu">
            <NavLink to="/login">
              <i className="fas fa-user-ninja"></i>
            </NavLink>
            <NavLink to="/register">
              <i className="fas fa-user-plus"></i>
            </NavLink>
          </div>
        </nav>
      );
    }
  }
}

Navigation.propTypes = {
  authedUser: PropTypes.object,
};

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Navigation);
