import { html } from "lit";
import { BaseElement } from "../BaseElement";


export class LookItem extends BaseElement {

    static get properties() {
        return {
            label: { type: String },
            source: {type: String, reflect: true},
        };
    }

    constructor() {
        super();

        this.label = '';
        this.source = "/feeds/bape-90s-lookbook.jpg";
    }

    clickedItem() {
        console.log("Look clicked")
    }

    render() {
        return html`
            <img class="gallery-item" src=${this.source} @click=${this.clickedItem} />
        `
    }
}

customElements.define('look-item', LookItem)