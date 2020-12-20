"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAnswers = exports.SEND_ANSWERS = void 0;
var SEND_ANSWERS = "ANSWERS/SEND_ANSWERS"; // export const SHOW_RESULTS = "RESULT/SHOW_RESULTS";

exports.SEND_ANSWERS = SEND_ANSWERS;

var sendAnswers = function sendAnswers(payload) {
  return {
    type: SEND_ANSWERS,
    payload: payload
  };
}; // export const showResult = (payload) => {
//   return {
//     type: SHOW_RESULTS,
//     payload,
//   };
// };


exports.sendAnswers = sendAnswers;