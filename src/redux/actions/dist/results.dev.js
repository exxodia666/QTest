"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addResults = exports.ADD_RESULTS = void 0;
var ADD_RESULTS = "RESULT/ADD_RESULTS";
exports.ADD_RESULTS = ADD_RESULTS;

var addResults = function addResults(payload) {
  return {
    type: ADD_RESULTS,
    payload: payload
  };
};

exports.addResults = addResults;