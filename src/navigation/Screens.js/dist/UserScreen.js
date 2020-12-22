"use strict";
exports.__esModule = true;
exports.UserScreen = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
//import { useDispatch } from 'react-redux';
var add_user_1 = require("../../redux/actions/add_user");
exports.UserScreen = function () {
    var ref = react_1.useRef(null);
    var dispatch = react_redux_1.useDispatch();
    var user = react_redux_1.useSelector(function (state) {
        return {
            user_name: state.user_name
        };
    });
    console.log('ДЕБАГ РАКЕТА ЗАЛЕТАЄ 🚀', user);
    var handleName = function (e) {
        if (e.key === 'Enter') {
            dispatch(add_user_1.add_user({ user_name: ref.current.value }));
            ref.current.value = '';
        }
    };
    return (react_1["default"].createElement("div", { className: "row p" },
        react_1["default"].createElement("div", { className: "input-field col s6" },
            react_1["default"].createElement("p", null, user && user.user_name),
            react_1["default"].createElement("input", { id: "icon_prefix", type: "text", onKeyPress: handleName, className: "validate", ref: ref }),
            react_1["default"].createElement("label", { htmlFor: "icon_prefix" }, "Name"))));
};
