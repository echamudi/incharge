// ==UserScript==
// @name         Incharge
// @version      0.6
// @description  Recharge InVision App with additional features
// @author       https://github.com/ezhmd
// @match        https://projects.invisionapp.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-2.2.4.min.js
// ==/UserScript==

(function() {
    // Set universal incharge variable

    let incharge: any = {};
    (<any> window).incharge = incharge;

    // UI template

    incharge.uiTemplate = `
    <div id="inchargeUI">
        <button onclick="incharge.functions.collapseAll()" type="button">Collapse All</button>
        <button onclick="incharge.functions.expandAll()" type="button">Expand All</button>
    </div>
    `;

    // UI Styles

    incharge.uiStyle = `
    <style>
        #inchargeUI {
            position: fixed;
            background: white;
            z-index: 1000;
            right: 0;
            top: 0;
        }
    </style>
    `;

    // Functions

    incharge.functions = {};

    incharge.functions.collapseAll = function() {
        $('.collapse').each( function() {
            this.click()
        });
    };

    incharge.functions.expandAll = function() {
        $('.expand').each( function() {
            this.click()
        });
    };

    // Execute

        $(incharge.uiTemplate).prependTo($('body'));
        $(incharge.uiStyle).prependTo($('body'));
})();