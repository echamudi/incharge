// ==UserScript==
// @name         Incharge
// @version      0.6
// @description  Recharge InVision App with additional features
// @author       https://github.com/ezhmd
// @match        https://projects.invisionapp.com/*
// @grant        none
// ==/UserScript==

interface inchargeAction {
    name: string;
    position: ['projects', 'prototypes']
}

(function() {
    // UI Template

    let uiTemplate = `
    <div id="inchargeUI">
        <div class="incharge-title">InCharge⚡️</div>
        <div id="inchargeDropdown">
            <p>with ❤️ by ezhmd</p> 
        </div>
    </div>
    `;

    // UI Styles

    let uiStyle = `
    <style>
        #inchargeUI 
        {
            position: fixed;
            right: 10px;
            top: 10px;
            z-index: 1000;
        }
        
        .incharge-title 
        {
            border-radius: 5px;

            padding: 5px;
            color: white;

            width: 80px;
            margin-left: auto;

            font-weight: bold;
            text-align: center;

            box-shadow: 0px 2px 5px rgba(0,0,0,0.07);

            background: #ff3366;
        }
        .incharge-title:hover ~ #inchargeDropdown, 
        #inchargeDropdown:hover 
        {
            display: flex;
        }
        
        #inchargeDropdown 
        {
            display: none;
            padding: 5px;
            flex-direction: column;

            border-radius: 5px;
            box-shadow: 0px 2px 5px rgba(0,0,0,0.07);
            text-align: center;
            
            background: white;
        }

        #inchargeDropdown > button
        {
            margin: 5px 0px;
        }
    </style>
    `;

    // Helper Functions
    
    function forEach (array: any, callback: any, scope?: any) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    };

    // InCharge Actions!!

    let incharge: any = {};
    (<any> window).incharge = incharge;

    incharge.collapseAll  = {
        name    : "Collapse All Sections",
        page    : "prototypes",
        action  : function() {
            forEach(document.querySelectorAll('.collapse'), (index: any, value: any) => {
                value.click();
            });
        }
    };

    incharge.expandAll = {
        name    : "Expand All Sections",
        page    : "prototypes",
        action  : function() {
            forEach(document.querySelectorAll('.expand'), (index: any, value: any) => {
                value.click();
            });
        }
    }

    // Add UI to body

    document.body.insertAdjacentHTML('afterbegin', uiStyle + uiTemplate);

    // Append incharge actions to the UI

    Object.keys(incharge).forEach(function(key) {
        document
            .getElementById('inchargeDropdown')
            .insertAdjacentHTML(
                'afterbegin', 
                `<button onclick="incharge.${key}.action()">${incharge[key].name}</button>`
                )
    });
})();