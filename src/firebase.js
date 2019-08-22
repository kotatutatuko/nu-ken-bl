import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqK6pTTil3KrB7P4i9ZYll9rb299KNQmo",
    authDomain: "nu-ken-bl.firebaseapp.com",
    databaseURL: "https://nu-ken-bl.firebaseio.com",
    projectId: "nu-ken-bl",
    storageBucket: "",
    messagingSenderId: "479475115901",
    appId: "1:479475115901:web:1d9fc5ae19a5bee8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
