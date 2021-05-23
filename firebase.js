import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBSU165dC_BDwQ77k7UeXxTMNinMhbHW3A",
    authDomain: "sconder-fb.firebaseapp.com",
    projectId: "sconder-fb",
    storageBucket: "sconder-fb.appspot.com",
    messagingSenderId: "596135353707",
    appId: "1:596135353707:web:bfb00eea79f86e938dc02e"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage};