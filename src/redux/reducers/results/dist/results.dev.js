"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _results = require("../../actions/results");

var _send_answers = require("../../actions/send_answers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = {
  status: null,
  results: []
}; // eslint-disable-next-line

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _results.ADD_RESULTS:
      //console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ 🚀", action.payload.data);
      var newArray = _toConsumableArray(state.results);

      newArray.push(action.payload.data);
      var newobj = {
        status: action.payload.status,
        results: newArray
      }; //console.log(newobj);

      return newobj;

    default:
      return state;
  }
};

exports["default"] = _default;