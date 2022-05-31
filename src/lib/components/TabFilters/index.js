
import { html } from 'lit';

import {BaseElement} from '../BaseElement';

class TabFilters extends BaseElement {
    static get properties() {
        return {
            active: {type: String},
            all: {type: String},
            filters: {type: Array},
        };
    }

    constructor() {
        super();

        this.active = undefined;
        this.all = 'All';
        this.filters = [{title: "Dessert", id: "panel-1"}, {title: "Cocktail", id: "panel-2"}];
    }

    setActive(id) {
        this.active = id;

        console.log(this.active);

        const panelsElement =
            [document.getElementById('panel-1'), document.getElementById('panel-2')]
        if (!panelsElement) {
            return;
        }

        console.log(panelsElement);

        // panelsElement.classList.toggle('hidden', !!id && id !== panelsElement.id);
        // panelsElement.classList.toggle('hidden-yes', !!id && id !== panelsElement.id);

        for (const panel of panelsElement) {
            panel.toggleAttribute('hidden', !!id && id !== panel.id);
            panel.classList.toggle('hidden-yes', !!id && id !== panel.id);
        }

    }

    render() {
        const filtersMap = (filter) =>
            html`<button
                class="dessert-cat"
                data-state="${this.active === filter.id ? 'active' : 'inactive'}"
                type="button"
                @click="${() => this.setActive(filter.id)}"
            >
                    ${filter.title}
                </button>
            `;
        
        return html`<div class="dessert-filters wrapper region">${this.filters.map(filtersMap)}</div>`;
    }
}

customElements.define('tab-filters', TabFilters);