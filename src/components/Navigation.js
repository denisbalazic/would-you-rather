import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
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
            <NavLink to="/login">
              <i className="fas fa-user-ninja"></i>
            </NavLink>
            <NavLink to="/register">
              <i className="fas fa-user-plus"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fas fa-user-minus"></i>
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}
