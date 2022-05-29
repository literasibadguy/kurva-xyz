
import {store} from './store/store';
import { localStorage } from './utils/storage';

document.body.classList.remove('unresolved');

function onGlobalStateChanged({isSignedIn}) {
    document.body.classList.toggle('lh-signedin', isSignedIn);

    localStorage['kurva_isSignedIn'] = isSignedIn ? 'probably' : '';
    
}
store.subscribe(onGlobalStateChanged());
onGlobalStateChanged(store.getState());

