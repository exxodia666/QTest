"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadQuizzes = exports.showQuizzes = exports.setDone = exports.setSelected = exports.clearQuiz = exports.CLEAR_QUIZ = exports.SET_DONE = exports.SET_SELECTED = exports.LOAD_QUIZZES = exports.SHOW_QUIZZES = void 0;
var SHOW_QUIZZES = "QUIZ/SHOW_QUIZZES";
exports.SHOW_QUIZZES = SHOW_QUIZZES;
var LOAD_QUIZZES = "QUIZ/LOAD_QUIZZES";
exports.LOAD_QUIZZES = LOAD_QUIZZES;
var SET_SELECTED = "QUIZ/SET_SELECTED";
exports.SET_SELECTED = SET_SELECTED;
var SET_DONE = "QUIZ/SET_DONE";
exports.SET_DONE = SET_DONE;
var CLEAR_QUIZ = "QUIZ/CLEAR_QUIZ";
exports.CLEAR_QUIZ = CLEAR_QUIZ;

var clearQuiz = function clearQuiz() {
  return {
    type: CLEAR_QUIZ
  };
};

exports.clearQuiz = clearQuiz;

var setSelected = function setSelected(payload) {
  return {
    type: SET_SELECTED,
    payload: payload
  };
};

exports.setSelected = setSelected;

var setDone = function setDone(payload) {
  return {
    type: SET_DONE,
    payload: payload
  };
};

exports.setDone = setDone;

var showQuizzes = function showQuizzes(payload) {
  return {
    type: SHOW_QUIZZES,
    payload: payload
  };
};

exports.showQuizzes = showQuizzes;

var loadQuizzes = function loadQuizzes(payload) {
  return {
    type: LOAD_QUIZZES,
    payload: payload
  };
};

exports.loadQuizzes = loadQuizzes;