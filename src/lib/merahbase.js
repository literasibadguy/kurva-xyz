
import {initializeApp} from 'firebase/app';
import { getAuth, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as authSignOut } from 'firebase/auth';

import site from '../site/_data/site';

let isInitialized = false;

export function initialize() {
    if (isInitialized) {
        return;
    }

    initializeApp(site.firebase.stag);
    
}

getAuth().onAuthStateChanged((user) => {

    if (!user) {
        return;
    }

    isInitialized = true;
})

export async function registerUser(email, password) {
    let user = null;
    try {
        initialize();
        const res = await createUserWithEmailAndPassword(getAuth(), email, password);
        user = res.user;
    } catch (err) {
        console.log('Registration error', error);
    }

    return user;
}

export async function signInUser() {
    let user = null;
    try {
        initialize();
        const res = await signInWithEmailAndPassword(getAuth(), email, password);
        user = res.user;
    } catch (err) {
        console.log('Sign In user error', error);
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