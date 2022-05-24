
import {initializeApp } from 'firebase/app';
import { getAuth, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as authSignOut } from 'firebase/auth';
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
    
}

initialize();

getAuth().onAuthStateChanged((user) => {
    store.setState({checkingSignedInState: false});
    if (!user) {
        return;
    }

    store.setState({
        isSignedIn: true,
        user,
    });

    isInitialized = true;
})

export async function registerUser(email, password) {
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