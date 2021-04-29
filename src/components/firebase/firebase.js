import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC07iBOwyxmgkMfRbzIlpF5rm_nJq0x4hk",
    authDomain: "group-hackaton-auth.firebaseapp.com",
    projectId: "group-hackaton-auth",
    storageBucket: "group-hackaton-auth.appspot.com",
    messagingSenderId: "45923082642",
    appId: "1:45923082642:web:c9df016cd323c257b0a14b",
});
export const auth = app.auth();
export default app;
