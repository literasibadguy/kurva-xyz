import createStore from "unistore";
import devtools from 'unistore/devtools';
import { localStorage } from "../utils/storage";

const initialState = {

    checkingSignInState: true,
    isSignedIn: Boolean(localStorage['kurva_isSignedIn']),
    userAcceptsCookies: false,
    useer: null,
}

let store;
// if (isProd) {
    // store = createStore(initialState);
// } else {
    store = devtools(createStore(initialState));
// }

export {store};