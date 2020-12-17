import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import Header from "./components/Header";
import QuizList from "./components/QuizList";
import store from "./redux/store";

//export default store;

function App() {
  return (
    <Provider store={store}>
      <Header />
      <QuizList />
    </Provider>
  );
}

export default App;
