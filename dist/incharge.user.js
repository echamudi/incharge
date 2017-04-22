// ==UserScript==
// @name         Incharge
// @version      0.6
// @description  Recharge InVision App with additional features
// @author       https://github.com/ezhmd
// @match        https://projects.invisionapp.com/*
// @grant        none
// ==/UserScript==
(function () {
    // UI Template
    var uiTemplate = "\n    <div id=\"inchargeUI\">\n        <div class=\"incharge-title\">InCharge\u26A1\uFE0F</div>\n        <div class=\"incharge-title-margin-bottom\"></div>\n        <div id=\"inchargeDropdown\">\n            <p>with \u2764\uFE0F by \n                <a href=\"https://github.com/ezhmd\" target=\"_blank\">ezhmd</a>\n            </p> \n        </div>\n    </div>\n    ";
    // UI Styles
    var uiStyle = "\n    <style>\n        #inchargeUI \n        {\n            position: fixed;\n            right: 10px;\n            top: 10px;\n            z-index: 1000;\n        }\n        \n        .incharge-title \n        {\n            border-radius: 5px;\n\n            padding: 5px;\n            color: white;\n\n            width: 80px;\n            margin-left: auto;\n\n            font-weight: bold;\n            text-align: center;\n\n            box-shadow: 0px 2px 5px rgba(0,0,0,0.07);\n\n            background: #ff3366;\n        }\n\n        .incharge-title-margin-bottom {\n            height: 5px;\n        }\n        \n        #inchargeDropdown \n        {\n            display: flex;\n            display: none;\n            padding: 5px;\n            flex-direction: column;\n\n            border-radius: 5px;\n            box-shadow: 0px 2px 5px rgba(0,0,0,0.07);\n            text-align: center;\n            \n            background: white;\n        }\n\n        #inchargeDropdown > button\n        {\n            margin: 5px 0px;\n        }\n\n        .incharge-title:hover ~ #inchargeDropdown, \n        .incharge-title-margin-bottom:hover  ~ #inchargeDropdown, \n        #inchargeDropdown:hover \n        {\n            display: flex;\n        }\n\n    </style>\n    ";
    // Helper Functions
    function forEach(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    }
    ;
    // InCharge Actions!!
    var incharge = {};
    window.incharge = incharge;
    incharge.collapseAll = {
        name: "Collapse All Sections",
        page: "prototypes",
        action: function () {
            forEach(document.querySelectorAll('.collapse'), function (index, value) {
                value.click();
            });
        }
    };
    incharge.expandAll = {
        name: "Expand All Sections",
        page: "prototypes",
        action: function () {
            forEach(document.querySelectorAll('.expand'), function (index, value) {
                value.click();
            });
        }
    };
    // Add UI to body
    document.body.insertAdjacentHTML('afterbegin', uiStyle + uiTemplate);
    // Append incharge actions to the UI
    Object.keys(incharge).forEach(function (key) {
        document
            .getElementById('inchargeDropdown')
            .insertAdjacentHTML('afterbegin', "<button onclick=\"incharge." + key + ".action()\">" + incharge[key].name + "</button>");
    });
})();
