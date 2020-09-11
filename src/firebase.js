import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgCZND2ovkc9q14uJOYocWHW0jt2GQun0",
  authDomain: "react-firebase-login-c8392.firebaseapp.com",
  databaseURL: "https://react-firebase-login-c8392.firebaseio.com",
  projectId: "react-firebase-login-c8392",
  storageBucket: "react-firebase-login-c8392.appspot.com",
  messagingSenderId: "616412234806",
  appId: "1:616412234806:web:0cd57ec6b366f37a69c497",
  measurementId: "G-BK144BCN97"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };