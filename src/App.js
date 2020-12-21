import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./redux/store";
import MainNavigator from "./navigation/MainNavigator";
import { Profiler } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };

  ///TODO поле ввода ключа на приватный тест
  //TODO Check boxes and radio buttons
  return (
    <Provider store={store}>
      {/* <Profiler id="Movies" onRender={callback}> */}
      <MainNavigator />
      {/* </Profiler> */}
    </Provider>
  );
}

export default App;
