"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _add_user = require("../../actions/add_user");

var initialState = {
  user_name: ""
}; //eslint-disable-next-line

var add_user = function add_user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _add_user.ADD_USER:
      return {
        user_name: action.payload.user_name
      };

    default:
      return state;
  }
};

var _default = add_user;
exports["default"] = _default;