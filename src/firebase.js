//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore/lite";
//import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpK_GsK8K2mYvCwVZw1JBAkRX8Zsj_Zio",
  authDomain: "simplechat-1526d.firebaseapp.com",
  projectId: "simplechat-1526d",
  storageBucket: "simplechat-1526d.appspot.com",
  messagingSenderId: "526648726981",
  appId: "1:526648726981:web:ef6b53463135e19c9067ac",
  measurementId: "G-2P0VS38NC9",
};
//const app = initializeApp(firebaseApp);
//const db = getFirestore(firebaseApp);
//const auth = getAuth(db);

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
