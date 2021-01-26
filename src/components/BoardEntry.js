import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BoardEntry extends Component {
  render() {
    const { name, questions, answers, avatarURL } = this.props.user;
    return (
      <div className="score-card">
        <div className="avatar">
          <img src={avatarURL} alt="" />
        </div>
        <p className="name">{name}</p>
        <p className="score">
          <small>asked </small>
          {questions.length} /
        </p>
        <p className="score">
          <small> answered </small>
          {Object.keys(answers).length}
        </p>
      </div>
    );
  }
}

BoardEntry.propTypes = {
  user: PropTypes.object.isRequired,
};
