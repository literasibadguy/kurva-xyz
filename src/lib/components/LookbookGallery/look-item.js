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

        this.clickedItem = this.clickedItem.bind(this);
    }

    clickedItem() {
        console.log("Look clicked")

        let passImage = new CustomEvent('item-clicked', { bubbles: true, composed: true, detail: { source: this.source }})

        this.dispatchEvent(passImage)
    }

    render() {
        return html`
            <img class="gallery-item" src=${this.source} @click=${this.clickedItem} />
        `
    }
}

customElements.define('look-item', LookItem)