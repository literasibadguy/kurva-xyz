import { browserLocalPersistence } from "firebase/auth";
import { BaseElement } from "../BaseElement";
import { html } from "lit";
import { checkOverflow } from "../../utils/check-overflow";
import { generateIdSalt } from "../../utils/generate-salt";

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
        this.tabs = null;
        this.idSalt = generateIdSalt('kurva-tab-')

        this.onResize = this.onResize.bind(this);
        this._changeTab = this._changeTab.bind(this);
        this.focusTab = this.focusTab.bind(this);
        this.previousTab = this.previousTab.bind(this);
        this.nextTab = this.nextTab.bind(this);
        this.firstTab = this.firstTab.bind(this);
        this.lastTab = this.lastTab.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('resize', this.onResize);

    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.onResize);
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

    onFocus(e) {
        const tab = e.currentTarget;
        const tabs = this.querySelectorAll('.kurva-tabs__tab');
        const index = Array.from(tabs).indexOf(tab);

        tab.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
        this.activeTab = index;
    }

    updated(changedProperties) {
        if (changedProperties.has('activeTab')) {
            this._changeTab();
        }
    }

    focusTab(index) {
        const tabs = this.querySelectorAll('.kurva-tabs__tab');

        if (tabs[index]) {
            tabs[index].focus();
        }
    }

    previousTab() {
        const tabs = this.querySelectorAll('.kurva-tabs__tab');

        if (tabs[this.activeTab - 1]) {
          this.activeTab = this.activeTab - 1;
        } else {
          this.activeTab = tabs.length - 1;
        }
    }

    nextTab() {
        const tabs = this.querySelectorAll('.kurva-tabs__tab');

        this.activeTab = (this.activeTab + 1) % tabs.length || 0;
    }

    firstTab() {
        this.activeTab = 0;
    }

    lastTab() {
        const tabs = this.querySelectorAll('.kurva-tabs__tab');

        this.activeTab = tabs.length - 1;
    }

    _changeTab() {
        const tabs = this.querySelectorAll('.kurva-tabs__tab');
        const panels = this.querySelectorAll('.kurva-tabs__panel');
        const activeTab = tabs[this.activeTab];
        const activePanel = panels[this.activeTab];

        if (activeTab) {
            for (const tab of tabs) {
                tab.setAttribute('aria-selected', 'false');
                tab.setAttribute('tabindex', '-1');
            }

            activeTab.setAttribute('aria-selected', 'true');
            activeTab.removeAttribute('tabindex');
        }

        if (activePanel) {
            for (const panel of panels) {
                panel.hidden = true;
            }

            activePanel.hidden = false;
        }
    }

    indexOfTabByChild(node) {
        const panel = node.closest('[class="kurva-tabs__panel"]');
        if (!this.contains(panel)) {
            return -1;
        }
        const index = parseInt(panel.getAttribute('data-index'));
        return isNaN(index) ? -1 : index;
    }

    panelTemplate(i, child) {
        const index = i - 1;
        return html`
            <div
                data-index=${index}
                id="kurva-tab-${this.idSalt}-${i}-panel"
                class="kurva-tabs__panel"
                role="tabpanel"
                aria-labelledby="kurva-tab-${this.idSalt}-${i}"
                hidden
            >
                ${child}
            </div>
        `
    }

    tabTemplate(i, tabLabel) {
        switch (tabLabel) {
            case 'question':
                tabLabel = 'Question' + i;
                break;
            case 'sample':
                tabLabel = 'Sample ' + i;
                break;
            case '':
            case null:
            case 'bare':
                tabLabel = i;
                break;
            default:
                break;
        }

        // Need @click so tabs work on iOS Safari
    return html`
    <button
      @click=${this.onFocus}
      @focus=${this.onFocus}
      @keydown=${this.onKeydown}
      class="kurva-tabs__tab gc-analytics-event"
      role="tab"
      aria-selected="false"
      id="kurva-tab-${this.idSalt}-${i}"
      aria-controls="kurva-tab-${this.idSalt}-${i}-panel"
      tabindex="-1"
      data-category="Site-Wide Custom Events"
      data-label="tab, ${tabLabel}"
    >
      <span class="kurva-tabs__text-label">${tabLabel}</span>
    </button>
  `;
    }

    render() {
        if (!this.prerenderedChildren) {
            this.prerenderedChildren = [];
            this.tabs = [];
            let i = 1;

            for (const child of this.children) {
                this.prerenderedChildren.push(this.panelTemplate(i, child));
                const tabLabel = child.getAttribute('data-label');
                this.tabs.push(this.tabTemplate(i, tabLabel));
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

customElements.define('kurva-tabs', Tabs);