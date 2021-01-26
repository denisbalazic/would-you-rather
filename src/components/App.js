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
import LoadingBar from "react-redux-loading-bar";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <div>
        <Navigation />
        <LoadingBar />
        <Switch>
          <PrivateRoute exact path="/" component={QuestionList} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/questions/:questionId" component={DetailedQuestion} />
          <PrivateRoute exact path="/add" component={AddQuestion} />
          <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const actionCreators = {
  handleInitialData,
};

export default connect(null, actionCreators)(App);
