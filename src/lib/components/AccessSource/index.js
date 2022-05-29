import { LitElement, html, css } from "lit";
import { store } from "../../store/store";
import { BaseStateElement } from "../BaseStateElement";
import { BaseElement } from "../BaseElement";

class AccessSource extends LitElement {
    static get properties() {
        return {
            checkingSignedInState: { type: Boolean },
            isSignedIn: {},
            condition: {type: Boolean},
        }
    }

    static styles = css`
        .access-page-restrict {
            background-color: black;
            color: white;
            margin-inline: auto;
            max-width: 600px;
            padding: 1rem;

            a {
                color: white;
                text-decoration: underline;
            }
        }
    `;

    constructor() {
        super();
        this.isSignedIn = false;
        this.condition = false;
        // this.onStateChanged = this.onStateChanged.bind(this);
    }

    changeStatus(e)  {
        e.preventDefault();
        this.isSignedIn = !this.isSignedIn;
        console.log(this.isSignedIn)
    }

    render() {
        return this.condition

        ? html`<button @click=${this.changeStatus}>Change</button>Welcome what`
    
        : html`<button @click=${this.changeStatus}>Change</button>Please log in <button>Login</button>`;
    }

    // onStateChanged({checkingSignedInState, isSignedIn}) {
        // this.checkingSignedInState = checkingSignedInState;
        // this.isSignedIn = isSignedIn;
        // console.log(this.isSignedIn);
    // }
}

customElements.define('access-source', AccessSource);

/*

        if (this.isSignedIn) {
            return html`
                <div class="access-page">
                    <h2>What happen</h2>
                </div>
            `;
        }

        return html`
            <button @click=${this.changeStatus}>Change</button>
            <div class="access-page">
                ${this.condition ? html`<div><slot></slot></div>` : html`
                <div class="access-page-restrict">
                <h2>Kurva Premium Pass</h2>
                <p>Join Kurva Premium to access HTML and CSS source keys</p>
                    <div class="w-stack">
                        <p>Pricing</p>
                        <a href="/get-started">$99/year</a>
                        <a href="/get-started">$39/quarterly</a>
                    </div>
                </div>`}
            </div>
        `;

        return html`
            <div class="access-page-restrict">
                <h2>Kurva Premium Pass</h2>
                <p>Join Kurva Premium to access HTML and CSS source keys</p>
                    <div class="w-stack">
                        <p>Pricing</p>
                        <a href="/get-started">$99/year</a>
                        <a href="/get-started">$39/quarterly</a>
                    </div>
            </div>`;
*/