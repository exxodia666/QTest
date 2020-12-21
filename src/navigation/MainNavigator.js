import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
//import AddQuizScreen from "./Screens.js/AddQuizScreen";
import HomeScreen from "./Screens.js/HomeScreen";
import Quiz from "./Screens.js/Quiz";
import ResultsScreen from "./Screens.js/ResultsScreen";
//import AddNewQuiz from "./Screens/AddNewQuiz.tsx"
import { AddQuizScreen } from "./Screens.js/AddNewQuiz.tsx";

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
        <Route path="/results/:id">
          <ResultsScreen />
        </Route>
        <Route path="/results/">
          <ResultsScreen />
        </Route>
      </Switch>
    </Router>
  );
}
///TODO если есть рейтинг - не отправлять пост
