"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//http://134.249.181.40:7777/api/fe8ba3b8-2075-4272-aa61-036d34d4192c/
//eslint-disable-next-line
var _default = function _default(id) {
  return _axios["default"].get("http://134.249.181.40:7777/api/".concat(id, "/"));
};

exports["default"] = _default;