import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchLoadData } from "./sagas/quizzes";
import { watchSendData } from "./sagas/answers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(watchLoadData);
sagaMiddleware.run(watchSendData);

export default store;
