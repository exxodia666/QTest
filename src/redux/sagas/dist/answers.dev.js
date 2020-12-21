"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchSendData = watchSendData;

var _axios = _interopRequireDefault(require("axios"));

var _effects = require("redux-saga/effects");

var _results = require("../actions/results");

var _send_answers = require("../actions/send_answers");

var _show_quizzes = require("../actions/show_quizzes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(workerSendData),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(watchSendData);

var sendAnswers = function sendAnswers(_ref) {
  var obj = _ref.obj,
      id = _ref.id;
  return _axios["default"].post("http://134.249.181.40:7777/api/".concat(id, "/answer/"), obj);
}; //TODO NORMAL USER


function workerSendData(action) {
  var reqObj, res;
  return regeneratorRuntime.wrap(function workerSendData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          reqObj = {
            name: "Sanya",
            answers: action.payload.obj.map(function (item) {
              return {
                question_id: item.question.id,
                choices_id: item.choices.filter(function (i) {
                  return i.isSelected;
                }).map(function (i) {
                  return i.id;
                })
              };
            })
          };
          _context.next = 3;
          return (0, _effects.call)(sendAnswers, {
            obj: reqObj,
            id: action.payload.id
          });

        case 3:
          res = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _results.addResults)(res));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function watchSendData() {
  return regeneratorRuntime.wrap(function watchSendData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.takeEvery)(_send_answers.SEND_ANSWERS, workerSendData);

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