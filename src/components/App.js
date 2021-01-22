import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Navigation from "./Navigation";
import Login from "./Login";
import Register from "./Register";
import QuestionList from "./QuestionList";
import DetailedQuestion from "./DetailedQuestion";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <Navigation />
        {this.props.loading ? null : (
          <Switch>
            <Route exact path="/" component={QuestionList} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/questions/:questionId" component={DetailedQuestion} />
            <PrivateRoute exact path="/add" component={AddQuestion} />
            <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
            <Route path="*" component={NotFound} />
          </Switch>
        )}
      </div>
    );
  }
}

export default connect()(App);
