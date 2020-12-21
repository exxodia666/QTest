"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveState = exports.loadState = void 0;

var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return [];
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; //TODO
//SAVE USER NAME
//SAVE RESULTS FOR THIS NAME


exports.loadState = loadState;

var saveState = function saveState(state) {
  try {
    var serializedState = JSON.stringify({
      results: state.results
    }); //const serializedState = JSON.stringify({ });

    localStorage.setItem("state", serializedState);
  } catch (_unused) {// ignore write errors
  }
};

exports.saveState = saveState;