import { LitElement } from "lit";

export class BaseElement extends LitElement {
    firstUpdated(changedProperties)  {
        this.classList.remove('unresolved');
        super.firstUpdated(changedProperties);
    }

    createRenderRoot() {
        return this;
    }
}