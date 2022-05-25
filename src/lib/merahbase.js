
import {initializeApp } from 'firebase/app';
import { getAuth, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as authSignOut } from 'firebase/auth';
import {
    getFirestore,
    doc,
    runTransaction,
    onSnapshot,
} from 'firebase/firestore';
import { store } from './store/store';
// import { site } from '../site/_data/site';

let isInitialized = false;

export function initialize() {
    if (isInitialized) {
        return;
    }

    initializeApp({
        apiKey: "AIzaSyDkM-N1ElhDcKMqZjppH19_DXdybZsAaX4",
        authDomain: "kurva-stage-xyz.firebaseapp.com",
        projectId: "kurva-stage-xyz",
        storageBucket: "kurva-stage-xyz.appspot.com",
        messagingSenderId: "443896995756",
        appId: "1:443896995756:web:aac54fe4c84523e2536409",
        measurementId: "G-6HHTTHF0J6"
      });

    let firestoreUserUnsubscribe = () => {};
    let lastSavedUrl = null;

    const onUserSnapshot = (snapshot) => {
        let saveNewUrlToState = false;

        const data = snapshot.data() || {};
        const savedUrl = data.currentUrl || '';

        const {userUrl, userUrlSeen} = store.getState();

        if (lastSavedUrl && lastSavedUrl !== savedUrl) {
            saveNewUrlToState = true;
        } else if (!userUrl) {
            saveNewUrlToState = true;
        } else if (!lastSavedUrl && userUrl) {
            saveUserUrl(userUrl, userUrlSeen);
            lastSavedUrl = userUrl;
            return;
        } else {

        }
        lastSavedUrl = savedUrl;

        if (saveNewUrlToState) {
            const seen = (data.urls && data.urls[savedUrl]) || null;
            const userUrlSeen = seen ? seen.toDate() : null;
            const userUrlResultsPending = Boolean(savedUrl);

            store.setState({
                userUrl: savedUrl,
                userUrlSeen,
                userUrlResultsPending,
            })
        }
    }

    getAuth().onAuthStateChanged((user) => {
        store.setState({checkingSignedInState: false});
        firestoreUserUnsubscribe();
    
        if (!user) {
            return;
        }
    
        store.setState({
            isSignedIn: true,
            user,
        });

        console.log(user);

        firestoreUserUnsubscribe = (function () {
            let internalUnsubscribe = null;
            let unsubscribed = false;

            if (!unsubscribed) {
                internalUnsubscribe = onSnapshot(userRef(), onUserSnapshot);
            }

            return () => {
                unsubscribed = true;
                if (internalUnsubscribe) {
                    internalUnsubscribe();
                    internalUnsubscribe = null;
                }
            };
        })();
    });
    
    isInitialized = true;
}

initialize();

function userRef() {
    const state = store.getState();
    if (!state.user) {
        return null;
    }

    const firestore = getFirestore();
    return doc(firestore, 'users', state.user.uid);
}

export async function saveUserUrl(url, auditedOn = null) {
    const ref = userRef();
    if (!ref) {
        return null;
    }

    const firestore = getFirestore();
    const p = runTransaction(firestore, async (transaction) => {

    })
}

export async function registerUser(email, password, name) {
    let user = null;
    try {
        initialize();
        const res = await createUserWithEmailAndPassword(getAuth(), email, password);
        user = res.user;

    } catch (err) {
        console.log('Registration error', err);
    }

    return user;
}

export async function signInUser(email, password) {
    let user = null;
    try {
        initialize();
        const res = await signInWithEmailAndPassword(getAuth(), email, password);
        user = res.user;
    } catch (err) {
        console.log('Sign In user error', err);
    }

    return user;
}

export async function signOut() {
    try {
        initialize();
        await authSignOut(getAuth());
    } catch (err) {
        console.log()
    }
}