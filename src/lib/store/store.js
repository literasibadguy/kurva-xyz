import createStore from "unistore";
import devtools from 'unistore/devtools';
import { localStorage } from "../utils/storage";

const initialState = {

    checkingSignedInState: true,
    isSignedIn: Boolean(localStorage['kurva_isSignedIn']),
    userAcceptsCookies: false,
    user: null,
    userUrlSeen: null,
    userUrl: null,
    currentUrl: window.location.pathname,
    isModalOpen: false,
}

let store;
// if (isProd) {
    // store = createStore(initialState);
// } else {
    store = devtools(createStore(initialState));
// }

export {store};