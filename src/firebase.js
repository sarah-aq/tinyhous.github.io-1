
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCfQ5qCP-yy8-A-sBsGJuWKcB060RTNk-A",
    authDomain: "contact-form-tiny.firebaseapp.com",
    projectId: "contact-form-tiny",
    storageBucket: "contact-form-tiny.appspot.com",
    messagingSenderId: "541057376742",
    appId: "1:541057376742:web:dfdb02fea2baf10f0ab627",
    measurementId: "G-QJSBE5WQN7"
});
var db = firebaseApp.firestore();

export { db };
