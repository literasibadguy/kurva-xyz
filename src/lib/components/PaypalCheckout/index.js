import { LitElement, html } from "lit"; 
import { loadScript } from "@paypal/paypal-js";


export class PaypalCheckout extends LitElement {
    constructor()  {
        super();
    }

    render()  {
        let subscriptionKurva;
        loadScript({ "client-id": "AQTKwwKCnsT0Gf98Jhxb6ga8BFNIhpGiznEkjjhpmIFXplDExPiMDKwdn3GEtSkeY3ON8xK7AzKX9yNd", vault: true })
            .then((paypal) => {
                subscriptionKurva = paypal.Buttons({
                    style: {
                        shape: 'rect',
                        color: 'gold',
                        layout: 'vertical',
                        label: 'subscribe'
                    },
                    createSubscription: function(data, actions) {
                      return actions.subscription.create({
                        /* Creates the subscription */
                        plan_id: 'P-4SC22356SF739513UMKCEHYI'
                      });
                    },
                    onApprove: function(data, actions) {
                        // Update Data User
                      alert(data.subscriptionID); // You can add optional success message for the subscriber here
                    }
                }).render('#paypal-button-container-P-4SC22356SF739513UMKCEHYI');
        })
        .catch((error) => {
            console.error("failed to load the PayPal JS SDK script", error);
        });

        return html`
            ${subscriptionKurva}
        `;
    }
}

customElements.define('kurva-paypal-button', PaypalCheckout);