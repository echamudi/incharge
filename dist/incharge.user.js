// ==UserScript==
// @name         Incharge
// @version      0.6
// @description  Recharge InVision App with additional features
// @author       https://github.com/ezhmd
// @match        https://projects.invisionapp.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-2.2.4.min.js
// ==/UserScript==
(function () {
    // Set universal incharge variable
    var incharge = {};
    window.incharge = incharge;
    // UI template
    incharge.uiTemplate = "\n    <div id=\"inchargeUI\">\n        <button onclick=\"incharge.functions.collapseAll()\" type=\"button\">Collapse All</button>\n        <button onclick=\"incharge.functions.expandAll()\" type=\"button\">Expand All</button>\n    </div>\n    ";
    // UI Styles
    incharge.uiStyle = "\n    <style>\n        #inchargeUI {\n            position: fixed;\n            background: white;\n            z-index: 1000;\n            right: 0;\n            top: 0;\n        }\n    </style>\n    ";
    // Functions
    incharge.functions = {};
    incharge.functions.collapseAll = function () {
        $('.collapse').each(function () {
            this.click();
        });
    };
    incharge.functions.expandAll = function () {
        $('.expand').each(function () {
            this.click();
        });
    };
    // Execute
    $(incharge.uiTemplate).prependTo($('body'));
    $(incharge.uiStyle).prependTo($('body'));
})();
