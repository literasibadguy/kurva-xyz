import { html, LitElement, css } from "lit";
import { classMap } from '../../../../node_modules/lit/directives/class-map';
import { ifDefined } from '../../../../node_modules/lit/directives/if-defined';

export class ContentDrawerItem extends LitElement {
    static get properties() {
        return {
            disabled: {type: Boolean, reflect: true, },
            hideDivider: { type: Boolean, reflect: true, attribute: 'hide-divider'},
            selected: {type: Boolean, reflect: true, },
            target: {},
            value: {},
        }
    }

    static shadowRootOptions = {mode: 'open', delegatesFocus: Number((/Safari\/(\d+)/.exec(navigator.userAgent) ?? ['', 0])[1]) <= 537,};

    static styles = css`
    .tabs__nav-link {
        cursor: pointer;
        background-color: black;
        color: white;
    }
  `;

    constructor() {
        super();
        this.target = null;
        this.selected = false;
        this.value = '';
    }

    // createRenderRoot() {
        // return this.attachShadow({
            // mode: 'open',
            // delegatesFocus: Number((/Safari\/(\d+)/.exec(navigator.userAgent) ?? ['', 0])[1]) <= 537,
        // });
    // }

    shouldUpdate(changedProperties)  {
        if (changedProperties.has('selected') || changedProperties.has('target')) {
            const {selected, target } = this;
            if (target) {
                const doc = this.getRootNode();
                const targetNode = doc.getElementById && doc.getElementById(target);
                if (targetNode) {
                    targetNode.toggleAttribute('hidden', !selected);
                }
            }
        }
        return true;
    }

    enableClick(e) {
        e.preventDefault();
        this.selected = !this.selected;
    }

    render()  {
        const { disabled, selected, target } = this;
        const className = classMap({
            [`content-drawer-btn`]: true,
            ['content-drawer--selected']: selected,
        });
        return html`
            <button
                type="button"
                role="tab"
                class=${className}
                ?disabled=${disabled}
                tabindex=${selected ? '0' : '-1'}
                aria-controls=${target}
                @click=${this.enableClick}
                aria-selected=${Boolean(selected)}>
                <span class="content-drawer__label"><slot></slot></span>
            </button>
        `;
    }
}

customElements.define('content-drawer-item', ContentDrawerItem);