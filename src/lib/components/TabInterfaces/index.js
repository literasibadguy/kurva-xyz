import { html, LitElement, css } from "lit";
import { BaseElement } from "../BaseElement";


export class TabInterface extends LitElement {
    static get properties() {
        return {
            open: {type: Boolean}
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
    `

    constructor() {
        super();
        this.open = false;
    }

    clickTab({target}) {
        
        console.log(target);
        console.log(this.constructor);
        this.open = !this.open;

        const constructor = this.constructor;
    }

    render() {
        return html`
        <div class="tab-panels">
        <div id="tab-lists" role="tablist" aria-label="Sample Tabs">
          <div id="tab-items">
          <span class="tab-item" role="tab" aria-selected="true" aria-controls="panel-1" @click=${this.clickTab}
            id="tab-1" tabindex="0">
                Dessert
              </span>
          <span class="tab-item" role="tab" aria-selected="false" aria-controls="panel-2" @click=${this.clickTab}
            id="tab-2" tabindex="-1">
                Cafe
              </span>
          </div>
        </div>
        <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1" ?hidden=${this.open}>
            <slot name="slot-1"></slot>
        </div>
        <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" ?hidden=${!this.open}>
            <slot name="slot-2"></slot>
        </div>
      </div>      
        `;
    }
}

customElements.define('tab-interface', TabInterface)