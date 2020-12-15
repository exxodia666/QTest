import { Provider } from "react-redux";
import store from "./redux/store";
import List from './components/List';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <List />
    </Provider>
  );
}

export default App;
