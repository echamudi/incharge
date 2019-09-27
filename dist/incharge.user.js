
// ==UserScript==
// @name         InCharge
// @description  Recharge InVision App with additional features
// @author       https://github.com/ezhmd
// @match        https://projects.invisionapp.com/*
// @grant        none
// @version      3
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/raw-loader/index.js!./src/ui-style.css":
/*!****************************************************!*\
  !*** ./node_modules/raw-loader!./src/ui-style.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"#inchargeUI \\n{\\n    display: none;\\n    position: fixed;\\n    right: 10px;\\n    top: 10px;\\n    z-index: 1000;\\n}\\n\\n.incharge-title \\n{\\n    border-radius: 5px;\\n\\n    padding: 5px;\\n    color: white;\\n\\n    width: 80px;\\n    margin-left: auto;\\n\\n    font-weight: bold;\\n    text-align: center;\\n\\n    box-shadow: 0px 2px 5px rgba(0,0,0,0.07);\\n\\n    background: #ff3366;\\n}\\n\\n.incharge-title-margin-bottom \\n{\\n    height: 5px;\\n}\\n\\n#inchargeDropdown \\n{\\n    display: flex;\\n    display: none;\\n    padding: 5px;\\n    flex-direction: column;\\n\\n    border-radius: 5px;\\n    box-shadow: 0px 2px 5px rgba(0,0,0,0.07);\\n    text-align: center;\\n    \\n    background: white;\\n}\\n\\n#inchargeDropdown > button\\n{\\n    margin: 5px 0px;\\n}\\n\\n.incharge-title:hover ~ #inchargeDropdown, \\n.incharge-title-margin-bottom:hover  ~ #inchargeDropdown, \\n#inchargeDropdown:hover \\n{\\n    display: flex;\\n}\\n\\n.incharge-button \\n{\\n    display: none;\\n}\\n\\n/* Put the button on left on some pages */\\n\\n.build-mode #inchargeUI \\n{\\n    right: auto;\\n    left: 10px;\\n}\\n.build-mode .incharge-title  \\n{\\n    margin-left: 0;\\n    margin-right: auto;\\n}\\n\\n/* where to display the buttons */\\n.page_project .incharge-display-project,\\n.build-mode .incharge-display-build\\n{\\n    display: block;\\n}\\n\\n/* where to display the dropdown */\\n.page_project #inchargeUI,\\n.build-mode #inchargeUI \\n{\\n    display: block;\\n} \\n\\n/* No ellipses */\\n#build .fancy-dropdown h2,\\n.project .screen .project-info .filename\\n{\\n    text-overflow: initial;\\n    white-space: unset;\\n    word-wrap: break-word;\\n}\\n\\n#bottom_bar .project-navigation a \\n{\\n    text-overflow: initial;\\n    word-wrap: normal;\\n}\\n\\n/* Always on file name */\\n.project .screen.grid .project-info .filename \\n{\\n    display: block !important;\\n    margin-top: 5px;\\n}\\n\\n/* Always on updated date */\\n.updated-at \\n{\\n    display: block !important;\\n}\\n\\n/* Bigger screen details */\\n.project .screen.grid .project-info \\n{\\n    height: 150px;\\n}\\n\\n/* Wider divider label input */\\n.dividerLabelInput \\n{\\n    width: 900px !important;\\n}\"\n\n//# sourceURL=webpack:///./src/ui-style.css?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/ui-template.html":
/*!********************************************************!*\
  !*** ./node_modules/raw-loader!./src/ui-template.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=\\\"inchargeUI\\\">\\n    <div class=\\\"incharge-title\\\">InCharge⚡️</div>\\n    <div class=\\\"incharge-title-margin-bottom\\\"></div>\\n    <div id=\\\"inchargeDropdown\\\">\\n        <p>with ❤️ by \\n            <a href=\\\"https://github.com/ezhmd\\\" target=\\\"_blank\\\">ezhmd</a>\\n        </p> \\n    </div>\\n</div>\"\n\n//# sourceURL=webpack:///./src/ui-template.html?./node_modules/raw-loader");

/***/ }),

/***/ "./src/actions.class.ts":
/*!******************************!*\
  !*** ./src/actions.class.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Actions = /** @class */ (function () {\n    function Actions() {\n        this.actions = [];\n        this.inchargeFunctions = {};\n        window.inchargeFunctions = this.inchargeFunctions;\n    }\n    ;\n    Actions.prototype.registerAction = function (action) {\n        this.actions.push(action);\n        this.inchargeFunctions[action.id] = action.method;\n        return this;\n    };\n    Actions.prototype.render = function () {\n        console.log(this.actions);\n        console.log(this.inchargeFunctions);\n        this.actions.forEach(function (element) {\n            document\n                .getElementById('inchargeDropdown')\n                .insertAdjacentHTML('afterbegin', \"<button class=\\\"incharge-button incharge-display-\" + element.page + \"\\\" onclick=\\\"window.inchargeFunctions.\" + element.id + \"()\\\">\\n                        \" + element.label + \"\\n                    </button>\");\n        });\n    };\n    return Actions;\n}());\nexports.Actions = Actions;\n\n\n//# sourceURL=webpack:///./src/actions.class.ts?");

/***/ }),

/***/ "./src/functions.ts":
/*!**************************!*\
  !*** ./src/functions.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction forEach(array, callback, scope) {\n    for (var i = 0; i < array.length; i++) {\n        callback.call(scope, i, array[i]);\n    }\n}\nexports.forEach = forEach;\n;\nfunction sortUsingNestedText(parent, childSelector, keySelector) {\n    var items = parent.children(childSelector).sort(function (a, b) {\n        var vA = $(keySelector, a).text();\n        var vB = $(keySelector, b).text();\n        return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;\n    });\n    parent.append(items);\n}\nexports.sortUsingNestedText = sortUsingNestedText;\n\n\n//# sourceURL=webpack:///./src/functions.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar actions_class_1 = __webpack_require__(/*! ./actions.class */ \"./src/actions.class.ts\");\nvar functions_1 = __webpack_require__(/*! ./functions */ \"./src/functions.ts\");\nvar functions_2 = __webpack_require__(/*! ./functions */ \"./src/functions.ts\");\n// Load SCSS and HTML\nvar uiTemplate = __webpack_require__(/*! raw-loader!./ui-template.html */ \"./node_modules/raw-loader/index.js!./src/ui-template.html\");\nvar uiStyle = __webpack_require__(/*! raw-loader!./ui-style.css */ \"./node_modules/raw-loader/index.js!./src/ui-style.css\");\n// Add UI to body\ndocument.body.insertAdjacentHTML('afterbegin', \"\\n    <style>\\n        \" + uiStyle + \"\\n    </style>\\n    \" + uiTemplate + \"\\n\");\n// InCharge Actions!!\nvar actions = new actions_class_1.Actions();\nactions\n    .registerAction({\n    id: \"collapseAll\",\n    label: \"Collapse All Sections\",\n    page: \"project\",\n    method: function () {\n        functions_1.forEach(document.querySelectorAll('.collapse'), function (index, value) {\n            value.click();\n        });\n    }\n})\n    .registerAction({\n    id: \"expandAll\",\n    label: \"Expand All Sections\",\n    page: \"project\",\n    method: function () {\n        functions_1.forEach(document.querySelectorAll('.expand'), function (index, value) {\n            value.click();\n        });\n    }\n})\n    .registerAction({\n    id: \"sortHotspotTemplates\",\n    label: \"Sort Hotspot Templates (Top Dropdown)\",\n    page: \"build\",\n    method: function () {\n        functions_2.sortUsingNestedText($('#hotspot-templates'), 'li', '[ng-bind=\"template.name\"]');\n    }\n});\nactions.render();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });