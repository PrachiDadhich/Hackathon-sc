// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBtFkYlBD4LarrZpjWefOBQQWa77bZjxFI",
    authDomain: "handicrafts-8852a.firebaseapp.com",
    projectId: "handicrafts-8852a",
    storageBucket: "handicrafts-8852a.appspot.com",
    messagingSenderId: "545111139092",
    appId: "1:545111139092:web:21e6dc6b69fe700c2a5801",
    measurementId: "G-TP8R26N2DM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};