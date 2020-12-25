"use strict";
exports.__esModule = true;
var add_user_1 = require("./../../actions/add_user");
var initialState = {
    user_name: ''
};
//eslint-disable-next-line
var add_user = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case add_user_1.ADD_USER:
            //console.log(action.payload);
            return {
                user_name: action.payload.user_name
            };
        default:
            return state;
    }
};
exports["default"] = add_user;
