import React, { Component } from "react";

export default class BoardEntry extends Component {
  render() {
    const { name, questions, answers, avatarUrl } = this.props.user;
    return (
      <div className="score-card">
        {/* <p>{avatarUrl}</p> */}
        <p className="name">{name}</p>
        <p className="score">{questions.length}</p>
        <p className="score">/{Object.keys(answers).length}</p>
        <p className="score-sum">/{questions.length + Object.keys(answers).length}</p>
      </div>
    );
  }
}
