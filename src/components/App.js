import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Login from "./Login";
import Register from "./Register";
import QuestionList from "./QuestionList";
import DetailedQuestion from "./DetailedQuestion";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={QuestionList} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/questions/:questionId" component={DetailedQuestion} />
          <Route exact path="/add" component={AddQuestion} />
          <Route exact path="/leaderboard" component={LeaderBoard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
