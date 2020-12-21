"use strict";
exports.__esModule = true;
exports.AddQuizScreen = void 0;
var react_1 = require("react");
exports.AddQuizScreen = function () {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    var _b = react_1.useState([]), questionList = _b[0], setQuestionList = _b[1];
    var _c = react_1.useState({}), question = _c[0], setQuestion = _c[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("p", null, "Typescript"),
        react_1["default"].createElement("div", { "class": "row" },
            react_1["default"].createElement("div", { "class": "col s12" },
                react_1["default"].createElement("div", { "class": "row" },
                    react_1["default"].createElement("div", { "class": "input-field col s12" },
                        react_1["default"].createElement("i", { "class": "material-icons prefix" }, "textsms"),
                        react_1["default"].createElement("input", { type: "text", id: "autocomplete-input", "class": "autocomplete" },
                            react_1["default"].createElement("label", { "for": "autocomplete-input" }, "Autocomplete")))))),
        "); }"));
};
