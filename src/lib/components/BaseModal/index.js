import { closeModal, openModal } from "../../actions";
import { checkOverflow } from "../../utils/check-overflow";
import { BaseElement } from "../BaseElement";


export class BaseModal extends BaseElement {
    static get properties() {
        return {
            open: { type: Boolean, reflect: true },
            animatable: {type: Boolean, reflect: true },
            overflow: {type: Boolean, reflect: true },
            parentModal: { type: String, reflect: true, attribute: 'parent-modal'},
        }
    }

    constructor() {
        super();

        this.open_ = false;
        this.animatable = false;
        this.overflow =  false;
        this._triggerElement = null;
        this._Parent = null;
        this.parentModal = null;

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onAnimationEnd = this.onAnimationEnd.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this.onClickMM);

        this.tabIndex = -1;
        this.inert  = !this.open;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this.onClickMM);

        window.setTimeout(() => {
            if (!this.isConnected) {
                this.open = false;
            }
        }, 0);
    }

    set open(val) {
        if (this.open_  === val)  {
            return;
        }

        console.log("OPENING MODAL");

        const oldVal = this.open_;

        this.open_ = val;
        if (this.open_) {

            this._triggerElement = /** @type HTMLElement */ (document.activeElement);

            this.addEventListener('keyup', this.onKeyUp);
            this.addEventListener('resize', this.onResize);
        } else {
            const event = new Event('close-modal');

            this.dispatchEvent(event);
            window.removeEventListener('resize', this.onResize);
        }

        this.manageDocument();
        this.animatable = true;
        this.addEventListener('animationend', this.onanimationend, {
            once: true
        });
        this.inert = this.open;

        this.requestUpdate('open', oldVal);
    }

    get open() {
        return this.open_;
    }

    manageDocument() {
        if (this.open) {

            openModal();
            const parent = this.closest(this.parentModal);

            if (parent) {
                parent.inert = true;
                this._parent = parent;
            }
        } else if (!this.open && this.parentModal) {
            if (parent) {
                parent.inert = false;
                this._parent = null;
            }
        } else {
            closeModal();
        }
    }

    onClickMM(e) {
        console.log('ON CLICK MM');
        if (e.currentTarget !== e.target) {
            return;
        }
        this.open = false;
    }

    onResize() {

        const content = this.querySelector('.web-modal__content');

        if (!content) {
            return;
        }

        this.overflow = checkOverflow(content, 'height');

    }

    onKeyUp(e) {
        // Close modal when user presses Escape.
        if (e.key === 'Escape') {
          this.open = false;
        }
      }

    onAnimationEnd() {
        this.animatable = false;

        this.manageFocus();
        if (this.open) {
            this.onResize();
            window.addEventListener('resize', this.onResize);
        } else {
            window.removeEventListener('resize', this.onResize);
            this.removeEventListener('keyup', this.onKeyUp);
        }
        this.inert = !this.open;
    }


}

customElements.define('base-modal', BaseModal);