import { LitElement, property, query } from "lit-element";
import { html } from "lit-html";
import { BaseElement } from "../BaseElement";
import { initialize, registerUser } from '../../merahbase';
import {store} from '../../store/store';

class RegisterUser extends BaseElement {
    static get properties() {
        return {
            firstName: { type: String },
            lastName: { type: String },
            emailValue: {type: String },
            passwordValue: {type: String },
            confirmPasswordValue: {type: String, },
            disabledButton: {type: Boolean, },
        };
    }

    constructor() {
        super();
        this.processing = false;
        this.submitted = false;
        this.onSubmit = this.onSubmit.bind(this);

        if (store.getState().isSignedIn) {
            initialize();
        }
    }

    connectedCallback()  {
        super.connectedCallback();
        this.form = this.renderRoot?.querySelector('form');
        this.addEventListener('submit', this.onSubmit);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("What works for me");
        const form = new FormData(e.target);
        console.log(form.value);
        console.log(this.emailValue);
        registerUser(this.emailValue, this.passwordValue).then((user) => {
            if (user) {
                console.log(user);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    onChangeFirstName(e) {
        this.firstName = e.target.value;
    }

    onChangeLastName(e) {
        this.lastName = e.target.value;
    }

    onChangeEmail(e) {
        this.emailValue = e.target.value;
    }

    onChangePassword(e)  {
        this.passwordValue = e.target.value;
    }

    onChangeConfirmPassword(e)  {
        this.confirmPasswordValue = e.target.value;
        console.log(this.confirmPasswordValue);
    }

    render() {
        return html`
        <form class="w-stack" id="form-register" method="post">
            <div class="w-stack">
                <label for="choose">First Name</label>
                <input class="input-text" id="first-name" @input="${this.onChangeFirstName}" type="text" required>
            </div>

            <div class="w-stack">
            <label for="choose">Email</label>
            <input class="input-text" id="email" @input="${this.onChangeEmail}" type="email" required>
            </div>

            <div class="w-stack">
            <label for="password">Password</label>
            <input class="input-text" id="password" @input="${this.onChangePassword}" type="password" required>
            </div>

            <div class="w-stack">
            <label for="confirm-password">Confirm Password</label>
            <input class="input-text" id="confirm-password" @input="${this.onChangeConfirmPassword}" type="password" required>
            </div>
            <button class="submit-button" type="submit" value="Send">Register</button>
            </div>
        </form>
        `
    }
}

customElements.define('kurva-register-user', RegisterUser);