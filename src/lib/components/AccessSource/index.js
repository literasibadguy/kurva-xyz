import { LitElement } from "lit-element";
import { store } from "../../store/store";
import { BaseStateElement } from "../BaseStateElement";
import { html } from "lit-html";
import { BaseElement } from "../BaseElement";

class AccessSource extends BaseElement {
    static properties() {
        return {
            premiumsource: { type: Boolean },
            premiumuser: { type: Boolean },
            checkingSignedInState: { type: Boolean },
            isSignedIn: {type: Boolean },
        }
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        store.subscribe(this.onStateChanged);
        this.onStateChanged(store.getState());
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        store.unsubscribe(this.onStateChanged);
    }

    render() {
        console.log(this.isSignedIn);

        return html`
        ${this.isSignedIn ? html`<div class="access-page><slot></slot></div>` : html`
        <div class="access-page-restrict">
        <h2>Kurva Premium Pass</h2>
        <p>Join Kurva Premium to access HTML and CSS source keys</p>
            <div class="w-stack">
                <p>Pricing</p>
                <a href="/get-started">$99/year</a>
                <a href="/get-started">$39/quarterly</a>
            </div>
        </div>`}
        `;
    }

    onStateChanged({checkingSignedInState, isSignedIn}) {
        this.checkingSignedInState = checkingSignedInState;
        this.isSignedIn = isSignedIn;
    }
}

customElements.define('access-source', AccessSource);