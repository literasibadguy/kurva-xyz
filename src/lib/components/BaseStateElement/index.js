import { store } from "../../store/store";
import { BaseElement } from "../BaseElement";


export class BaseStateElement extends BaseElement {
    constructor() {
        super();
        this.onStateChanged = this.onStateChanged.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        store.subscribe(this.onStateChanged);
        this.onStateChanged(store.getState());
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        store.unsubscribe(this.onStateChanged);
    }

    onStateChanged(state) {}
}