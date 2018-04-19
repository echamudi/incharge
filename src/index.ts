import { Actions } from "./actions.class";

import { forEach } from "./functions";
import { sortUsingNestedText } from "./functions";

declare var $: any;

// Load SCSS and HTML

let uiTemplate = require("raw-loader!./ui-template.html");
let uiStyle = require("raw-loader!./ui-style.css");

// Add UI to body

document.body.insertAdjacentHTML('afterbegin', 
`
    <style>
        ${uiStyle}
    </style>
    ${uiTemplate}
`
);

// InCharge Actions!!

let actions = new Actions();

actions
    .registerAction(
        {
            id      : "collapseAll",
            label   : "Collapse All Sections",
            page    : "project",
            method  : () => {
                forEach(document.querySelectorAll('.collapse'), (index: any, value: any) => {
                    value.click();
                });
            }
        }    
    )
    .registerAction(
        {
            id      : "expandAll",
            label   : "Expand All Sections",
            page    : "project",
            method  : () => {
                forEach(document.querySelectorAll('.expand'), (index: any, value: any) => {
                    value.click();
                });
            }
        }    
    )
    .registerAction(
        {
            id      : "sortHotspotTemplates",
            label   : "Sort Hotspot Templates (Top Dropdown)",
            page    : "build",
            method  : () => {
                sortUsingNestedText($('#hotspot-templates'), 'li', '[ng-bind="template.name"]')
            }
        }    
    );

actions.render();