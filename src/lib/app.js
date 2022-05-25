
import {store} from './store/store';
import { localStorage } from './utils/storage';

document.body.classList.remove('unresolved');

function onGlobalStateChanged({isSignedIn}) {

    if (isSignedIn) {
        // window.location = '/';
    }
    
}
store.subscribe(onGlobalStateChanged());
onGlobalStateChanged(store.getState());

