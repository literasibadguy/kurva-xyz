import { LitElement } from "lit-element";
import { html } from "lit-html";

class RegisterUser extends LitElement {

    constructor() {
        super();
    }

    connectedCallback()  {
        super.connectedCallback();
        this.addEventListener('submit', this.onSubmit);
    }

    onSubmit(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        console.log(form);
    }

    render() {
        return html`
        <form>
            <div>
            <label for="choose">Email</label>
            <input id="email" type="email" required>
            </div>

            <div>
            <label for="password">Password</label>
            <input id="password" type="password" required>
            </div>

            <div>
            <label for="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password" required>
            </div>
            <input type="submit" value="Send">
            </div>
        </form>
        `
    }
}

customElements.define('kurva-register-user', RegisterUser);