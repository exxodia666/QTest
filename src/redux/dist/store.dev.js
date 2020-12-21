"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.persistedState = void 0;

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("./reducers"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _quizzes = require("./sagas/quizzes");

var _answers = require("./sagas/answers");

var _load_quizlist = require("./sagas/load_quizlist");

var _sessionStorage = require("./sessionStorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])();
var persistedState = (0, _sessionStorage.loadState)();
exports.persistedState = persistedState;
var store = (0, _redux.createStore)(_reducers["default"], persistedState, (0, _redux.compose)((0, _redux.applyMiddleware)(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddleware.run(_quizzes.watchLoadData);
sagaMiddleware.run(_answers.watchSendData);
sagaMiddleware.run(_load_quizlist.watchLoadQuizList);
var _default = store;
exports["default"] = _default;
store.subscribe(function () {
  (0, _sessionStorage.saveState)(store.getState());
});