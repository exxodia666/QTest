import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddQuizScreen from "./Screens.js/AddQuizScreen";
import HomeScreen from "./Screens.js/HomeScreen";
import Quiz from "./Screens.js/Quiz";

export default function MainNavigator() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/add">
          <AddQuizScreen />
        </Route>
        <Route path="/quiz/:id">
          <Quiz />
        </Route>
      </Switch>
    </Router>
  );
}
