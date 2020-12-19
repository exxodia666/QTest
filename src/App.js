import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./redux/store";
import MainNavigator from "./navigation/MainNavigator";

function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
      {/* <Main /> */}
    </Provider>
  );
}

export default App;

/*
 <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  
         
        </div>*/
