import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const { authedUser, component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          authedUser ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(PrivateRoute);
