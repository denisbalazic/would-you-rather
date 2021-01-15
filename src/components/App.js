import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Login from "./Login";
import Register from "./Register";
import QuestionList from "./QuestionList";
import DetailedQuestion from "./DetailedQuestion";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./LeaderBoard";

export default class App extends Component {
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
        </Switch>
      </div>
    );
  }
}
