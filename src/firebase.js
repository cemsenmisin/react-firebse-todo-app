import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({        apiKey: "AIzaSyBjgS1h7gBgXTlzwu7_ataIltzMFsh0B-w",
    apiKey: "AIzaSyBjgS1h7gBgXTlzwu7_ataIltzMFsh0B-w",
    authDomain: "todo-app-cp-8f311.firebaseapp.com",
    projectId: "todo-app-cp-8f311",
    storageBucket: "todo-app-cp-8f311.appspot.com",
    messagingSenderId: "142685407360",
    appId: "1:142685407360:web:dddf23502d00e8e76f3e65",
    measurementId: "G-HZE4H7NKQ3"
});

const db = firebaseApp.firestore();

export { db };