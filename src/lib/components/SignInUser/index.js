import { LitElement } from "lit-element";
import { html  } from "lit-html";
import { BaseElement } from "../BaseElement";
import { BaseStateElement } from "../BaseStateElement";
import { signInUser, signOut } from '../../merahbase';

class SignInUser extends BaseStateElement {
    static get properties() {
        return {
            emailValue: {type: String },
            passValue: {type: String },
            checkingSignedInState: {type: Boolean},
            isSignedIn: {type: Boolean},
            disableButton: {type: String},
            signOutForm: {type: Object},
        };
    }

    constructor() {
        super();
        this.disableButton = true;
        this.emailValidated = false;
        this.onSuccess = this.onSuccess.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.form = this.renderRoot?.querySelector('form');
        this.signOutForm = this.renderRoot?.getElementById('.sign-out');
        this.addEventListener('submit', this.submitSignIn);

        if (this.emailValidated && this.passValue.length > 0) {
            this.disableButton = false;
        } else {
            this.disableButton = true;
        }

        // this.addEventListener('submit', this.submitLogOut);
    }

    onChangeEmail(e) {
        if (e.target.validity.typeMismatch) {
            this.emailValidated = false;
        } else if (e.target.validity.valueMissing) {
            this.emailValidated = false;
        } else {
            this.emailValidated = true;
        }

        if (this.emailValidated && this.passValue.length) {
            this.disableButton = false;
        } else {
            this.disableButton = true;
        }

        this.emailValue = e.target.value;
    }

    onChangePass(e) {
        this.passValue = e.target.value;
        if (this.emailValidated && this.passValue.length) {
            this.disableButton = false;
        } else {
            this.disableButton = true;
        }
    }

    submitSignIn(e) {
        e.preventDefault();
        
        signInUser(this.emailValue, this.passValue).then((userResponse) => {
            if (userResponse) {
                this.onSuccess();
            }
        }).catch((err) => {
            console.warn('Error', err);
        })
    }

    submitLogOut(e) {
        e.preventDefault();

        signOut().then((value) => {
            this.onSuccess();
        }).catch((err) => {
            console.warn('Error', err);
        })
    }

    renderSubmitButton() {
        if (this.disableButton) {
            return `disabled=""`
        }
        return ``
    }

    onSuccess() {
        this.removeEventListener('submit', this.submitSignIn);
        this.removeEventListener('submit', this.submitLogOut);
        location.replace('/');
    }

    render() {
        if (this.isSignedIn) {
            return html`
                <form id="sign-out" method="post">
                    <div class="w-stack">
                    <h2>You're signed in. Go to your account page</h2>
                    <button form="sign-out" type="submit">Log out</button>
                    </div>
                </form>
            `;
        }

        return html`
            <div class="login region">
            <form id="sign-in" class="w-stack" method="post">
                <div class="w-stack">
                <label>Email Address</label>
                <input class="input-text" id="email-sign" @input="${this.onChangeEmail}" type="email" required></input>
                </div>

                <div class="w-stack">
                <label>Password</label>
                <input class="input-text" id="password-sign" @input="${this.onChangePass}" type="password" required></input>
                </div>

                <button id="signin-button" ?disabled=${this.disableButton} class="submit-button" form="sign-in" type="submit">SIGN IN</button>
            </form>
            </div>
        `;
    }

    onStateChanged({checkingSignedInState, isSignedIn}) {
        this.checkingSignedInState = checkingSignedInState;
        this.isSignedIn = isSignedIn;
    }
}

customElements.define('kurva-signin', SignInUser);