import { html } from "lit";
import { BaseElement } from "../BaseElement";


export class LookbookGallery extends BaseElement {

    static get properties() {
        return {
            source: {type: String, reflect: true},
        };
    }

    constructor() {
        super();
        this.source = "images/feeds/bape-incover-90s.JPG";

        this.listenedEvent = this.listenedEvent.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.galleryItem = document.querySelector('look-item');

        this.galleryItems = document.querySelectorAll('look-item');
        for (const item of this.galleryItems) {
            item.addEventListener('item-clicked', this.listenedEvent)
        }
        

        console.log('this.gallery item', this.galleryItem);
    }

    disconnectedCallback() {
        super.disconnectedCallback()
    }

    listenedEvent(event) {
        console.log('event detail', event.detail.source)
        this.source = event.detail.source
    }

    render() {
        return html`
            <img src=${this.source} />
        `
    }
}

customElements.define('look-book', LookbookGallery)