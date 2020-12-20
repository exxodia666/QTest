import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./redux/store";
import MainNavigator from "./navigation/MainNavigator";
function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
