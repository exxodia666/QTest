"use strict";
exports.__esModule = true;
exports.AddQuizScreen = void 0;
var react_1 = require("react");
;
exports.AddQuizScreen = function () {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    var _b = react_1.useState(), questionList = _b[0], setQuestionList = _b[1];
    var _c = react_1.useState(), question = _c[0], setQuestion = _c[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col s12" },
                react_1["default"].createElement("div", { className: "row" },
                    react_1["default"].createElement("div", { className: "input-field col s12" },
                        react_1["default"].createElement("i", { className: "material-icons prefix" }, "textsms"),
                        react_1["default"].createElement("input", { type: "text", id: "autocomplete-input", className: "autocomplete" }),
                        react_1["default"].createElement("label", { htmlFor: 'autocomplete-input' }, "Autocomplete")))))));
};
