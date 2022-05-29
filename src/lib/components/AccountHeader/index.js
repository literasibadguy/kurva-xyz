import { html } from "lit";
import { BaseStateElement } from "../BaseStateElement";
import { signOut } from '../../merahbase';

class AccountHeader extends BaseStateElement {
    static get properties() {
        return {
            checkingSignedInState: {type: Boolean},
            isSignedIn: {type: Boolean},
            hoverAccount: {type: Boolean},
        }
    }

    constructor() {
        super();
        this.hoverAccount = true;
    }

    popUpMenuAccount() {
        this.hoverAccount = false;
    }

    exitMenuAccount() {
        this.hoverAccount = true;
    }

    async signOut() {
        try {
            await signOut();
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    createRenderRoot() {
        return this;
      }

    render() {
        if (this.isSignedIn) {
            return html`
            <div @mouseenter="${this.popUpMenuAccount}" class="account-nav">
                <p>Already Signed In</p>

                <ul ?hidden=${this.hoverAccount} class="account-items">
                    <li><a href="/my-account">My Account</a></li>
                    <li><a style="cursor: pointer;" @click=${this.signOut}>Sign out</li>
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