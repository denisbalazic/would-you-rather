import React, { Component } from "react";
import { connect } from "react-redux";
import BoardEntry from "./BoardEntry";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {Object.values(users)
          .sort(
            (a, b) =>
              Object.keys(b.answers).length +
              b.questions.length -
              Object.keys(a.answers).length -
              a.questions.length
          )
          .map((user) => (
            <BoardEntry key={user.id} user={user} />
          ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(LeaderBoard);
