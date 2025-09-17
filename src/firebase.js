import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6lMhTGApT6E2VWzILzPGH7SmfZu78ecM",
  authDomain: "clone-53d15.firebaseapp.com",
  projectId: "clone-53d15",
  storageBucket: "clone-53d15.firebasestorage.app",
  messagingSenderId: "693498327859",
  appId: "1:693498327859:web:a0bfa984735069e2d88446",
  measurementId: "G-FQJF7XK1N9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };