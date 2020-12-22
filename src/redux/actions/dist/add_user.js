"use strict";
exports.__esModule = true;
exports.add_user = exports.ADD_USER = void 0;
//Action
exports.ADD_USER = 'USER/ADD_USER';
//action creator with typres
function add_user(user) {
    return {
        type: exports.ADD_USER,
        payload: user
    };
}
exports.add_user = add_user;
