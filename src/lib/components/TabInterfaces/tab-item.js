import { LitElement, html } from "lit";
import {classMap} from '../../../../node_modules/lit/directives/class-map';
import { BaseElement } from "../BaseElement";


export class TabInterfacesItem extends LitElement {
    static get properties() {
        return {
            selected: {type: Boolean, reflect: true},
            value: {},
            target: {},
            active: {type: String},
        }
    }

    constructor() {
        super();
        this.active = undefined;
        this.selected = false;
        this.value = '';
        this.target = undefined;
    }

    clickTab({target}) {
        this.active = target.id;
        console.log(target.id);
    }

    render() {
        const className = classMap({
            [`tab-item`]: true,
            [`tab-item-selected`]: this.open,
        });
        return html`
            <button
            class="${className}" 
            role="tab"
            tabindex=${this.selected ? '0' : '-1'}
            aria-controls=${this.target}
            aria-selected=${this.selected}
            @click=${this.clickTab}>
                <slot></slot>
            </button>
        `;
    }
}

customElements.define('tab-item', TabInterfacesItem);