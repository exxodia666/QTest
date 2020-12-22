"use strict";
exports.__esModule = true;
var react_1 = require("react");
function UserScreen() {
    return (react_1["default"].createElement("div", { "class": "row" },
        react_1["default"].createElement("form", { "class": "col s12" },
            react_1["default"].createElement("div", { "class": "row" },
                react_1["default"].createElement("div", { "class": "input-field col s6" },
                    react_1["default"].createElement("i", { "class": "material-icons prefix" }, "account_circle"),
                    react_1["default"].createElement("input", { id: "icon_prefix", type: "text", "class": "validate" },
                        react_1["default"].createElement("label", { "for": "icon_prefix" }, "First Name")),
                    react_1["default"].createElement("div", { "class": "input-field col s6" },
                        react_1["default"].createElement("i", { "class": "material-icons prefix" }, "phone"),
                        react_1["default"].createElement("input", { id: "icon_telephone", type: "tel", "class": "validate" },
                            react_1["default"].createElement("label", { "for": "icon_telephone" }, "Telephone"))))),
            ") }")));
}
exports["default"] = UserScreen;
