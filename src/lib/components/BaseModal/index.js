import { BaseElement } from "../BaseElement";


export class BaseModal extends BaseElement {
    static get properties() {
        return {
            open: { type: Boolean, reflect: true },
            parentModal: { type: String, reflect: true, attribute: 'parent-modal'},
        }
    }

    constructor() {
        super();

        this.open_ = false;
    }
}