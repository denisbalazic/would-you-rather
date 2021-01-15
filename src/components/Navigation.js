import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Pool</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/">Logout</NavLink>
          </li>
          <li>Nav</li>
        </ul>
      </div>
    );
  }
}
