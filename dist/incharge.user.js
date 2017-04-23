
// ==UserScript==
// @name         InCharge
// @description  Recharge InVision App with additional features
// @author       https://github.com/ezhmd
// @match        https://projects.invisionapp.com/*
// @grant        none
// ==/UserScript==
        
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "#inchargeUI \n{\n    position: fixed;\n    right: 10px;\n    top: 10px;\n    z-index: 1000;\n}\n\n.incharge-title \n{\n    border-radius: 5px;\n\n    padding: 5px;\n    color: white;\n\n    width: 80px;\n    margin-left: auto;\n\n    font-weight: bold;\n    text-align: center;\n\n    box-shadow: 0px 2px 5px rgba(0,0,0,0.07);\n\n    background: #ff3366;\n}\n\n.incharge-title-margin-bottom {\n    height: 5px;\n}\n\n#inchargeDropdown \n{\n    display: flex;\n    display: none;\n    padding: 5px;\n    flex-direction: column;\n\n    border-radius: 5px;\n    box-shadow: 0px 2px 5px rgba(0,0,0,0.07);\n    text-align: center;\n    \n    background: white;\n}\n\n#inchargeDropdown > button\n{\n    margin: 5px 0px;\n}\n\n.incharge-title:hover ~ #inchargeDropdown, \n.incharge-title-margin-bottom:hover  ~ #inchargeDropdown, \n#inchargeDropdown:hover \n{\n    display: flex;\n}\n\n.incharge-button {\n    display: none;\n}\n\n.page_project .incharge-display-project {\n    display: block;\n}"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div id=\"inchargeUI\">\n    <div class=\"incharge-title\">InCharge⚡️</div>\n    <div class=\"incharge-title-margin-bottom\"></div>\n    <div id=\"inchargeDropdown\">\n        <p>with ❤️ by \n            <a href=\"https://github.com/ezhmd\" target=\"_blank\">ezhmd</a>\n        </p> \n    </div>\n</div>;\n"

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Actions = (function () {
    function Actions() {
        this.actions = [];
        this.inchargeFunctions = {};
        window.inchargeFunctions = this.inchargeFunctions;
    }
    ;
    Actions.prototype.registerAction = function (action) {
        this.actions.push(action);
        this.inchargeFunctions[action.id] = action.method;
        return this;
    };
    Actions.prototype.render = function () {
        console.log(this.actions);
        console.log(this.inchargeFunctions);
        this.actions.forEach(function (element) {
            document
                .getElementById('inchargeDropdown')
                .insertAdjacentHTML('afterbegin', "<button class=\"incharge-button incharge-display-" + element.page + "\" onclick=\"window.inchargeFunctions." + element.id + "()\">\n                        " + element.label + "\n                    </button>");
        });
    };
    return Actions;
}());
exports.Actions = Actions;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function forEach(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
}
exports.forEach = forEach;
;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actions_class_1 = __webpack_require__(2);
var functions_1 = __webpack_require__(3);
// Load SCSS and HTML
var uiTemplate = __webpack_require__(1);
var uiStyle = __webpack_require__(0);
// Add UI to body
document.body.insertAdjacentHTML('afterbegin', "\n    <style>\n        " + uiStyle + "\n    </style>\n    " + uiTemplate + "\n");
// InCharge Actions!!
var actions = new actions_class_1.Actions();
actions
    .registerAction({
    id: "collapseAll",
    label: "Collapse All Sections",
    page: "project",
    method: function () {
        functions_1.forEach(document.querySelectorAll('.collapse'), function (index, value) {
            value.click();
        });
    }
})
    .registerAction({
    id: "expandAll",
    label: "Expand All Sections",
    page: "project",
    method: function () {
        functions_1.forEach(document.querySelectorAll('.expand'), function (index, value) {
            value.click();
        });
    }
});
actions.render();


/***/ })
/******/ ]);