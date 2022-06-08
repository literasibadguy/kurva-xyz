import { BaseElement } from "../BaseElement";
import { collection, onSnapshot, query, getFirestore, getDocs } from "firebase/firestore";
import { initialize } from "../../merahbase";
import { html } from 'lit';
import { asyncAppend } from '../../../../node_modules/lit/directives/async-append';

class UcapanList extends BaseElement {
    static get properties()  {
        return {
            lists: {type: Object},
        }
    }

    constructor() {
        super();
        this.lists = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.getUcapanLists();
    }

    getUcapanLists() {
        initialize();
        const firestore = getFirestore();
        const getCollection = collection(firestore, 'weedings', 'nama-nama', 'ucapans');
        const q = query(getCollection);

        // getDocs(q).then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         this.lists.push(doc.data());
        //     })
        //     this.requestUpdate('lists', []);
        // }).catch((error) => {
        //     console.log('Firestore fetch not works', error);
        // });

        onSnapshot(q, (querySnapshot) => {
            // const cities = [];
            this.lists = [];
            const oldVal = this.lists;
            querySnapshot.forEach((doc) => {
                this.lists.push(doc.data());
            });
            this.requestUpdate('lists');
            console.log("Current lists: ", this.lists.join(", "));
        });
    }

    updated(changedProperties) {
        console.log(changedProperties);
    }

    get getUcapanItem() {
        return this.lists.map((item, index) => {
            if (!item) {
                console.log('Nothing');
                return html``;
            }

            return html`
            <div id="ucapan-item-${index}" class="ucapan-item flow">
                <h2>${item.firstName}</h2>
                <p>${item.greeting}</p>
            </div>
        `});
    }

    render() {
        return html`
            <div id="ucapan-lists" class="edges">
                ${this.getUcapanItem}
            </div>
        `;
    }
}

customElements.define('ucapan-list', UcapanList);