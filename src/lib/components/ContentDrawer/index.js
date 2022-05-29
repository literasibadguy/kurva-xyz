import { LitElement } from "lit";
import { forEach, indexOf } from "../../utils/collection-helpers";
import './content-item.js';

export class ContentDrawer extends LitElement {
    static get properties() {
        return {
            value: {reflect: true},
        }
    }

    constructor() {
        super();
        this.value = '';
    }

    _handleHover({ target, type }) {
        const { selectorItem } = this.constructor;
        const items = this.querySelectorAll(selectorItem);
        const index = type !== 'mouseover' ? -1 : indexOf(items, target.closest(selectorItem));
        const nextIndex = index < 0 ? index : index + 1;
        forEach(this.querySelectorAll(selectorItem), (elem, i) => {
            (elem).hideDivider = i === nextIndex;
        });
    }

    handleClick(target) {
        console.log('Handle click');
        this.handleUserInitiatedSelectItem(target);
    }

    getNextItem(currentItem, direction) {
        const items = this.querySelectorAll(this.constructor.selectorItemEnabled);
        const currentIndex = indexOf(items, currentItem);
        const nextIndex = capIndex(currentIndex + direction, items.length);
        return nextIndex === currentIndex ? null : items[nextIndex];
    }

    navigate(direction) {
        const { selectorItemSelected } = this.constructor;
        const nextItem = this.getNextItem(this.querySelector(selectorItemSelected), direction);
        if (nextItem) {
            this._handleUserInitiatedSelectItem(nextItem);
            this.requestUpdate();
        }
    }

    handleUserInitiatedSelectItem(item) {
        if (!item.disabled && item.value !== this.value) {
            const init = {
                bubbles: true,
                composed: true,
                detail: {
                    item,
                },
            };
            const constructor = this.constructor;
            const beforeSelectEvent = new CustomEvent(constructor.eventBeforeSelect, {
                ...init,
                cancelable: true,
              });
              if (this.dispatchEvent(beforeSelectEvent)) {
                this.selectionDidChange(item);
                const afterSelectEvent = new CustomEvent(constructor.eventSelect, init);
                this.dispatchEvent(afterSelectEvent);
              }
        }
    }

    selectionDidChange(itemToSelect) {
        this.value = itemToSelect;
        forEach(this.querySelectorAll(this.constructor.selectorItemSelected), item => {
            item.selected = false;
          });
          itemToSelect.selected = true;
          // Waits for rendering with the new state that updates `tabindex`
          Promise.resolve().then(() => {
            itemToSelect.focus();
          });
    }

    shouldUpdate(changedProperties) {
        if (changedProperties.has('value')) {
            const { selectorItem } = this.constructor;
            forEach(this.querySelectorAll(selectorItem), elem => {
                elem.selected = elem.value === this.value;
            });
        }
        return true;
    }

    render() {
        return html`
            <slot
                @click=${this.handleClick}
                @mouseover=${this._handleHover}
                @mouseout=${this._handleHover}
            >
            </slot>
        `
    }
}

customElements.define('content-drawer', ContentDrawer);