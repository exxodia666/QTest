import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HomeScreen from "./Screens.js/HomeScreen";
import Quiz from "./Screens.js/Quiz";
import ResultsScreen from "./Screens.js/ResultScreen/ResultsScreen";
import { UserScreen } from "./Screens.js/UserScreen.js";
import AddQuizScreen from "./Screens.js/AddQuizScreen";
import TestDoneScreen from "./Screens.js/TestDoneScreen/TestDoneScreen";

export const Context = React.createContext();

function MainNavigator() {
  // const [overlay, setOverlay] = useState("")

  // function takeState() {
  //   setOverlay((overlay == "") ? "overlay_active" : "")
  // }

  return (
    <Router>
      <Context.Provider>
        <Header />
        <Switch>
          <Route exact path="/ClasstimeKiller/">
            <UserScreen />
          </Route>
          <Route path="/ClasstimeKiller/home">
            <HomeScreen />
          </Route>
          <Route path="/ClasstimeKiller/add">
            <AddQuizScreen />
          </Route>
          <Route path="/ClasstimeKiller/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/ClasstimeKiller/done/:id">
            <TestDoneScreen />
          </Route>
          <Route path="/ClasstimeKiller/results/">
            <ResultsScreen />
          </Route>
        </Switch>
      </Context.Provider>
    </Router>
  );
}
export default React.memo(MainNavigator);
