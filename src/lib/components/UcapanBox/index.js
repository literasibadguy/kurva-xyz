
import { addCommentField } from '../../merahbase';
import {BaseElement} from '../BaseElement';

const pTagSelector = '.ucapin__error__message';
const hiddenClass = 'hidden-yes';

class UcapanBox extends BaseElement {
    constructor() {
        super();
        this.processing = false;
        this.submitted = false;
        this.onError = this.onError.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.form = this.querySelector('form');
        /** @type HTMLElement */
        this.ucapinError = this.querySelector('.ucapin__error');
        this.ucapinMessage = this.querySelector('.ucapin__message');
        console.log('Connected to components');
        this.form.submit = () => this.onError(new Error('Please fill out the form'));
        this.form.addEventListener('submit', this.onSubmit);
    }

    detachedCallback() {
        this.form.removeEventListener('submit', this.onSubmit);
    }

    async postForm(body) {
        console.log(body);
        const comment  = {
            firstName: body.get('FirstName'),
            greeting: body.get('Greeting')
        }
        const snap = await addCommentField(comment);
        return snap;
    }

    onError(error, useDefault = false) {
        if (!this.ucapinError) {
            console.warn(
              'Could not find area to display error in subscribe element.',
            );
            return;
        }
        const defaultError = new Error('Could not submit, please try again.');
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.processing || this.submitted) {
            return;
        }
        this.processing = true;
        console.log(e);
        const form = new FormData(e.target);
        console.log(form);

        this.postForm(form).then((response) => {
            if (response) {
                console.log(response);
                this.onSuccess();
            } else {
                console.log('Dont have any response');
                this.onError(new Error('Error Post Form Ucapan', true));
            }
        })
        .catch((e) => this.onError(e, true))
        .finally(() => (this.processing = false));

    }

    onSuccess() {
        this.submitted = true;
        this.ucapinError.classList.toggle(hiddenClass, true);
        this.ucapinError.querySelector(pTagSelector).textContent = '';
        this.ucapinMessage.textContent = `Terima kasih atas ucapan doa restu dari anda,`;
        this.form.removeEventListener('submit', this.onSubmit);
        this.form.parentElement.removeChild(this.form);
    }
}

customElements.define('ucapan-box', UcapanBox);