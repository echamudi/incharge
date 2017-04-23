import { action } from "./interfaces";

export class Actions {
    
    private actions: action[] = [];
    private inchargeFunctions: any = {};

    constructor() {
        (<any> window).inchargeFunctions = this.inchargeFunctions;
    };

    public registerAction(action: action): this {
        this.actions.push(action);
        this.inchargeFunctions[action.id] = action.method;
        return this;
    }

    public render(): void {
        console.log(this.actions);
        console.log(this.inchargeFunctions);
        
        this.actions.forEach(element => {
            document
                .getElementById('inchargeDropdown')
                .insertAdjacentHTML(
                    'afterbegin', 
                    `<button class="incharge-button incharge-display-${element.page}" onclick="window.inchargeFunctions.${element.id}()">
                        ${element.label}
                    </button>`
                    )
        });
    }
}