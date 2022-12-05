// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig={
    apiKey: "",
    authDomain:"",
    projectId:"",
    storageBucket:"",
    messagingSenderId:"",
    appId:""
};

const firebaseApp=initializeApp(firebaseConfig)
const db= firebaseApp.firestore()
const auth= auth()
const provider=new auth.GoogleAuthProvider()





export {auth, provider}

export default db




