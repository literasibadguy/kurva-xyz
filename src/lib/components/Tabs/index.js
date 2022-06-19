import { BaseElement } from "../BaseElement";


export class Tabs extends BaseElement {
    static get properties() {
        return {
            label: {type: String},
            activeTab: {type: Number, reflect: true},
            overflow: {type: Boolean, reflect: true},
        };
    }

    constructor() {
        super();
        this.label = '';
        this.activeTab = 0;
        this.overflow = false;
        this.prerenderedChildren = null;
    }

    connectedCallback() {
        super.connectedCallback();

    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        this.activeTab = 0;
        this.onResize();

        const questions = this.querySelectorAll('kurva-question');

        if (!questions) {
            return;
        }

        for (const question of questions) {
            question.addEventListener('request-nav-to-next', this.nextTab);
        }
    }

    onResize() {
        const tabs = this.querySelector('.kurva-tabs__tablist');

        this.overflow = checkOverflow(tabs, 'width');
    }

    render() {
        if (!this.prerenderedChildren) {
            this.prerenderedChildren = [];
            this.tabs = [];
            let i = 1;

            for (const child of this.children) {
                this.prerenderedChildren.push(this.panelTemplate(i, child));
                const tabLabel = child.getAttribute('data-label');
                this.tabIndex.push(this.tabTemplate(i, tabLabel));
                i++;
            }
        }
        return html`
            <div
                class="kurva-tabs__tablist"
                role="tablist"
                aria-label="${this.label || 'tabs'}"
            >
                ${this.tabs}
            </div>
            ${this.prerenderedChildren}
        `
    }
}