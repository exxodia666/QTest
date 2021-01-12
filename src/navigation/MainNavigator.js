import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HomeScreen from "./Screens.js/HomeScreen";
import Quiz from "./Screens.js/Quiz";
import ResultsScreen from "./Screens.js/ResultScreen/ResultsScreen";
import { UserScreen } from "./Screens.js/UserScreen.js";
import AddQuizScreen from "./Screens.js/AddQuizScreen";

export const Context = React.createContext()

function MainNavigator() {
  const [overlay, setOverlay] = useState("")

  function takeState() {
    setOverlay((overlay == "") ? "overlay_active" : "")
  }

  return (
    <Router>
      <Context.Provider value={overlay}>
      <Header takeState={takeState} />
      <Switch>
        <Route exact path="/">
          <UserScreen />
        </Route>
        <Route path="/home">
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
      </Context.Provider>
    </Router>
  );
}
export default React.memo(MainNavigator);
