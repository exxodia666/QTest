import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchLoadData } from "./sagas/quizzes";
import { watchSendData } from "./sagas/answers";
import { watchLoadQuizList } from "./sagas/load_quizlist";
import { loadState, saveState } from "./sessionStorage";

const sagaMiddleware = createSagaMiddleware();

export const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(watchLoadData);
sagaMiddleware.run(watchSendData);
sagaMiddleware.run(watchLoadQuizList);

export default store;

store.subscribe(() => {
  saveState(store.getState());
});
