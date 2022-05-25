import { html } from "lit-html";
import { BaseStateElement } from "../BaseStateElement";


class AccountHeader extends BaseStateElement {
    static get properties() {
        return {
            checkingSignedInState: {type: Boolean},
            isSignedIn: {type: Boolean},
        }
    }

    constructor() {
        super();
    }

    render() {
        if (this.isSignedIn) {
            return html`
            <div class="account-nav">
                <p>Already Signed In</p>

                <ul class="account-items">
                    <li>My Account</li>
                    <li>Sign out</li>
                </ul>
            </div>
            `
        }

        return html`
            <div class="account-nav">
                <a href="/sign-in">Sign In</a>
            </div>
        `
    }

    onStateChanged({checkingSignedInState, isSignedIn}) {
        this.isSignedIn = isSignedIn;
        this.checkingSignedInState = checkingSignedInState;
    }
}

customElements.define('account-header', AccountHeader);