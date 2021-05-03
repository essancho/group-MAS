import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA5snMDK5bP_X-KbUzIkfOmBhrZjboZgKo",
    authDomain: "pco-group-81301.firebaseapp.com",
    projectId: "pco-group-81301",
    storageBucket: "pco-group-81301.appspot.com",
    messagingSenderId: "987827487536",
    appId: "1:987827487536:web:d7eb33791500170697bef5",
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
