import { LitElement } from "lit-element";

export class BaseElement extends LitElement {
    firstUpdated(changedProperties)  {
        this.classList.remove('unresolved');
        super.firstUpdated(changedProperties);
    }

    createRenderRoot() {
        return this;
    }
}