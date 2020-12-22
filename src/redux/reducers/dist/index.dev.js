"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _quizzes = _interopRequireDefault(require("./quizzes/quizzes"));

var _results = _interopRequireDefault(require("./results/results"));

var _answer = _interopRequireDefault(require("./answers/answer"));

var _quiz_list = _interopRequireDefault(require("./quiz_list/quiz_list"));

var _addedQuizes = _interopRequireDefault(require("./addedQuizes/addedQuizes"));

var _add_user = _interopRequireDefault(require("./add_user/add_user.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  quizzes: _quizzes["default"],
  results: _results["default"],
  answers: _answer["default"],
  quiz_list: _quiz_list["default"],
  addedQuizes: _addedQuizes["default"],
  user: _add_user["default"]
});

exports["default"] = _default;