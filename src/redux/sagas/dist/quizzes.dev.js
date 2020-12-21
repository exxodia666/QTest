"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchLoadData = watchLoadData;

var _axios = _interopRequireDefault(require("axios"));

var _effects = require("redux-saga/effects");

var _show_quizzes = require("../actions/show_quizzes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(workerLoadData),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(watchLoadData);

var fetchData = function fetchData(p) {
  return _axios["default"].get("http://134.249.181.40:7777/api/".concat(p, "/"));
};

function workerLoadData(action) {
  var data;
  return regeneratorRuntime.wrap(function workerLoadData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(fetchData, action.payload);

        case 2:
          data = _context.sent;
          _context.next = 5;
          return (0, _effects.put)((0, _show_quizzes.showQuizzes)(data));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function watchLoadData() {
  return regeneratorRuntime.wrap(function watchLoadData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.takeEvery)(_show_quizzes.LOAD_QUIZZES, workerLoadData);

        case 3:
          _context2.next = 8;
          break;

        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 5]]);
} //const jsonData = `{"quiz":{"id":1,"quiz_name":"First quiz","creation_date":"2020-12-15T11:32:27.153608+02:00"},"questions":[[{"question":{"id":1,"quiz_id":1,"wording":"Whats up?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":1,"question_id":1,"text":"Good"},{"id":2,"question_id":1,"text":"Could be better"},{"id":3,"question_id":1,"text":"Bad"}]}],[{"question":{"id":2,"quiz_id":1,"wording":"Do you like this","text":"","image":"","is_multiple_choice":false},"choices":[{"id":4,"question_id":2,"text":"Yep"},{"id":5,"question_id":2,"text":"Could be better"},{"id":6,"question_id":2,"text":"Nope"}]}]]}`;
//console.log(JSON.parse(jsonData));