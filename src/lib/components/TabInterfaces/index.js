import { html, LitElement, css } from "lit";
// import {classMap} from '../../lit/directives/class-map.js';
import {classMap} from '../../../../node_modules/lit/directives/class-map';
import { BaseElement } from "../BaseElement";

import './tab-item';

export class TabInterface extends LitElement {
    static get properties() {
        return {
            open: {type: Boolean},
            target: {},
        }
    }

    static styles = css`
        .tab-panels {
            background-color: rgb(239, 189, 143);
        }

        #tab-lists {
            /* border-bottom: 1px solid black; */
            padding: 1rem;
            max-width: 600px;
            margin: 0 auto;
            /* margin-top: 1rem; */
            padding-top: 2rem;
            padding-bottom: 2rem;
            display: flex;
        }

        #tab-items {
            margin: 0 auto;
        }

        #tab-lists span {
            padding: 1rem;
            font-size: 24px;
        }

        .tab-item {
            background-color: black;
            border-radius: 1rem;
            color: white;
            margin-right: 1rem;
        }

        .tab-item-selected {
            background-color: white;
            color: black;

        }

        .tab-item:hover {

        }
    `

    constructor() {
        super();
        this.open = false;
        this.target = 'panel-1';
    }

    createRenderRoot() {
        return this.attachShadow({
          mode: 'open',
          delegatesFocus: Number((/Safari\/(\d+)/.exec(navigator.userAgent) ?? ['', 0])[1]) <= 537,
        });
      }
    

    clickTab({target}) {
        this.target = target.getAttribute('aria-controls');
        this.open = !this.open;
    }


    handleHover({target, type}) {
        // console.log(target);
    }

    shouldUpdate(changedProperties) {
        if (changedProperties.has('open') || changedProperties.has('target')) {
            const { selected, target } = this;
            if (target) {
                const doc = this.getRootNode();

                const targetNode = doc.getElementById && doc.getElementById(target);

                const shadowDoc = this.shadowRoot?.getElementById && this.shadowRoot?.getElementById(target);

                if (targetNode) {
                    console.log(targetNode);
                    targetNode.toggleAttribute('hidden', !this.open);
                } else {
                    console.log("No target");
                }
            }
        }
        return true;
    }

    render() {
        const className = classMap({
            [`tab-item`]: true,
            [`tab-item-selected`]: this.open,
        });

        return html`
        <div class="tab-panels">
        <div id="tab-lists" role="tablist" aria-label="Sample Tabs">
          <div id="tab-items">
          <tab-item target="panel-1">Dessert</tab-item>
          <tab-item target="panel-2">Coffee Drink</tab-item>
          </div>
        </div>
        </div>      
        `;
    }
}

customElements.define('tab-interface', TabInterface)