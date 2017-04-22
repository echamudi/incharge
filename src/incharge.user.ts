// ==UserScript==
// @name         InCharge
// @version      0.7
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
        <div class="incharge-title-margin-bottom"></div>
        <div id="inchargeDropdown">
            <p>with ❤️ by 
                <a href="https://github.com/ezhmd" target="_blank">ezhmd</a>
            </p> 
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

        .incharge-title-margin-bottom {
            height: 5px;
        }
        
        #inchargeDropdown 
        {
            display: flex;
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

        .incharge-title:hover ~ #inchargeDropdown, 
        .incharge-title-margin-bottom:hover  ~ #inchargeDropdown, 
        #inchargeDropdown:hover 
        {
            display: flex;
        }

        .incharge-button {
            display: none;
        }

        .page_project .incharge-display-project {
            display: block;
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
        page    : "project",
        action  : function() {
            forEach(document.querySelectorAll('.collapse'), (index: any, value: any) => {
                value.click();
            });
        }
    };

    incharge.expandAll = {
        name    : "Expand All Sections",
        page    : "project",
        action  : function() {
            forEach(document.querySelectorAll('.expand'), (index: any, value: any) => {
                value.click();
            });
        }
    }

    // Add UI to body

    document.body.insertAdjacentHTML('afterbegin', uiStyle + uiTemplate);

    // Append incharge actions to the UI

    Object.keys(incharge).forEach(key => {
        document
            .getElementById('inchargeDropdown')
            .insertAdjacentHTML(
                'afterbegin', 
                `<button class="incharge-button incharge-display-${incharge[key].page}" onclick="incharge.${key}.action()">
                    ${incharge[key].name}
                </button>`
                )
    });
})();