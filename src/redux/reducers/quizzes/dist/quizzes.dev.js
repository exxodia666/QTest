"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _show_quizzes = require("../../actions/show_quizzes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  status: null,
  quiz: {},
  questions: []
}; // eslint-disable-next-line

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _show_quizzes.CLEAR_QUIZ:
      return _objectSpread({}, initialState);

    case _show_quizzes.SHOW_QUIZZES:
      var newArray = action.payload.data.questions.map(function (item) {
        var newChoices = item.choices.map(function (i) {
          return _objectSpread({}, i, {
            isSelected: false
          });
        });
        item.choices = newChoices;
        item.isDone = false;
        return item;
      });
      var newObj = {
        status: action.payload.status,
        questions: newArray,
        quiz: action.payload.data.quiz
      };
      return newObj;

    case _show_quizzes.SET_DONE:
      ///TODO REFUCKTOR
      var found = state.questions.find(function (element) {
        return element.question.id === action.payload;
      });
      var index = state.questions.indexOf(found);

      var newobj = _objectSpread({}, state);

      newobj.questions[index].isDone = true;
      return _objectSpread({}, newobj);

    case _show_quizzes.SET_SELECTED:
      ///TODO REFUCKTOR
      var newState = _objectSpread({}, state);

      var foundQ = newState.questions.find(function (element) {
        return element.question.id === action.payload.id;
      });
      var indexQ = newState.questions.indexOf(foundQ); //newState.questions[indexQ].choices.map((i) => );

      var foundA = newState.questions[indexQ].choices.find(function (element) {
        return element.id === action.payload.answ;
      });
      var indexA = newState.questions[indexQ].choices.indexOf(foundA);

      if (!newState.questions[indexQ].question.is_multiple_choice) {
        var newChoices = newState.questions[indexQ].choices.map(function (i) {
          return _objectSpread({}, i, {
            isSelected: false
          });
        });
        newState.questions[indexQ].choices = newChoices;
      }

      newState.questions[indexQ].choices[indexA].isSelected = !newState.questions[indexQ].choices[indexA].isSelected;
      return _objectSpread({}, newState);

    default:
      return state;
  }
};

exports["default"] = _default;