import firebase from "firebase/compat/app"
// import {initializeApp} from "firebase/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDtu4VT7mffj87EUhIpTX3sJ66AOa4gLGU",
    authDomain: "react-week3.firebaseapp.com",
    projectId: "react-week3",
    storageBucket: "react-week3.appspot.com",
    messagingSenderId: "174639547902",
    appId: "1:174639547902:web:2cb0f98e6b2a88edb0acaf",
    measurementId: "G-ZHQT1P1T2J"
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth()
const firestore = firebase.firestore();
const storage = firebase.storage();

export {auth, apiKey, firestore, storage};