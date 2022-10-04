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
        this.activeLook = 0;

        this.listenedEvent = this.listenedEvent.bind(this);
        this.buttonLeftClicked = this.buttonLeftClicked.bind(this);
        this.buttonRightClicked = this.buttonRightClicked.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();

        this.leftButton = document.querySelector('.button-left');
        this.rightButton = document.querySelector('.button-right');
        this.indicator = document.querySelector('#indicator');

        this.galleryItems = document.querySelectorAll('look-item');
        for (const item of this.galleryItems) {
            // item.addEventListener('item-clicked', this.listenedEvent);
            item.addEventListener('item-clicked', (event) => {
                const index = Array.from(this.galleryItems).indexOf(item)
                this.listenedEvent(event, index);
            })
        }
        this.leftButton.addEventListener('click', this.buttonLeftClicked);
        this.rightButton.addEventListener('click', this.buttonRightClicked);

        document.addEventListener('keydown', e => {
            this.onKeydown(e);
        })
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.leftButton = document.querySelector('button-left');
        this.rightButton = document.querySelector('button-right');

        this.galleryItems = document.querySelector('look-item');
        for (const item of this.galleryItems) {
            item.removeEventListener('item-clicked', this.listenedEvent);
        }
        this.leftButton.removeEventListener('click', this.buttonLeftClicked);
        this.rightButton.removeEventListener('click', this.buttonRightClicked);
    }

    buttonLeftClicked(event) {
        const items = document.querySelectorAll('look-item');

        if (items[this.activeLook - 1]) {
          this.activeLook = this.activeLook - 1;
        } else {
          this.activeLook = items.length - 1;
        }

        const item = items[this.activeLook];
        console.log(item);
        this.source = item.getAttribute('source');

        this.indicator.innerHTML = `${this.activeLook} of ${items.length}`
    }

    buttonRightClicked(event) {
        const items = document.querySelectorAll('look-item');
        this.activeLook = (this.activeLook + 1) % items.length || 0;
        const item = items[this.activeLook];
        console.log(item);

        this.source = item.getAttribute('source');
        this.indicator.innerHTML = `${this.activeLook} of ${items.length}`
    }

    listenedEvent(event, index) {
        console.log('event detail', event.detail.source)
        this.activeTab = index;
        this.source = event.detail.source;

        this.indicator.innerHTML = `${index} of 6`

        console.log(this.indicator);
    }

    onKeydown(e) {
        const KEYCODE = {
            END: "End",
            HOME: "Home",
            LEFT: "ArrowLeft",
            RIGHT: "ArrowRight",
        }

        switch (e.key) {
        case KEYCODE.RIGHT:
            e.preventDefault();
            this.buttonRightClicked(e);
            console.log("RIGHT KEYCODE");
            break;
        case KEYCODE.LEFT:
            e.preventDefault();
            this.buttonLeftClicked(e);
            console.log("LEFT KEYCODE");
            break;
        case KEYCODE.HOME:
            e.preventDefault();
            this.buttonLeftClicked(e);
            console.log("HOME KEYCODE");
            break;
        case KEYCODE.END:
            e.preventDefault();
            this.buttonRightClicked(e);
            console.log("END KEYCODE");
            break;
        }

    }

    render() {
        return html`
            <img src=${this.source} />
        `
    }
}

customElements.define('look-book', LookbookGallery)