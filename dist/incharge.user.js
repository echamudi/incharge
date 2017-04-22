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
    var uiTemplate = "\n    <div id=\"inchargeUI\">\n        <div id=\"inchargeActions\">\n        </div>\n    </div>\n    ";
    // UI Styles
    var uiStyle = "\n    <style>\n        #inchargeUI {\n            position: fixed;\n            right: 10px;\n            top: 10px;\n            z-index: 1000;\n\n            border-radius: 5px;\n            box-shadow: 0px 2px 5px rgba(0,0,0,0.07);\n\n            background: white;\n        }\n\n        #inchargeActions {\n            display: flex;\n            padding: 5px;\n            flex-direction: column;\n        }\n\n        #inchargeActions > button{\n            margin: 5px 0px;\n        }\n    </style>\n    ";
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
            .getElementById('inchargeActions')
            .insertAdjacentHTML('beforeend', "<button onclick=\"incharge." + key + ".action()\">" + incharge[key].name + "</button>");
    });
})();
