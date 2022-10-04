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
        this.source = "";

        this.clickedItem = this.clickedItem.bind(this);
    }

    connectedCallback() {
        super.connectedCallback()

        document.addEventListener('keydown', e => {
            let code = e.key;
            console.log("Is there any code key here", code);
        })
    }

    clickedItem(e) {
        const item = e.currentTarget;
        console.log("Look clicked")

        item.setAttribute('aria-selected', 'true');

        let passImage = new CustomEvent('item-clicked', { bubbles: true, composed: true, detail: { source: this.source }})

        this.dispatchEvent(passImage)
    }

    onKeydown(e) {
        const KEYCODE = {
            END: 35,
            HOME: 36,
            LEFT: 37,
            RIGHT: 39,
        }

        console.log("Is it work on keydown");

        switch (e.keyCode) {
        case KEYCODE.RIGHT:
            e.preventDefault();
            console.log("RIGHT KEYCODE");
            break;
        case KEYCODE.LEFT:
            e.preventDefault();
            console.log("LEFT KEYCODE");
            break;
        case KEYCODE.HOME:
            e.preventDefault();
            console.log("HOME KEYCODE");
            break;
        case KEYCODE.END:
            e.preventDefault();
            console.log("END KEYCODE");
            break;
        }

    }

    render() {
        return html`
            <img class="gallery-item" decoding="async"
             loading="lazy"
             aria-selected="false"
             @keydown=${this.onkeydown}
              src=${this.source} @click=${this.clickedItem} />
        `
    }
}

customElements.define('look-item', LookItem)