import { Provider } from "react-redux";
import { Profiler } from "react";
import store from "./redux/store";
import MainNavigator from "./navigation/MainNavigator";
//import ImageComponent from "./navigation/Image";

function App() {

  console.log("RENDER APP");
  return (
    <Provider store={store}>
      <Profiler id="Quizzes" onRender={callback}>
        <MainNavigator />
      </Profiler>
    </Provider>
  );
}

export default App;
