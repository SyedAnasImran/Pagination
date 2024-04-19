import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO74CaKP9pKSAKTFFuYUPoy0Nsm3_s4SY",
  authDomain: "test-31c1f.firebaseapp.com",
  projectId: "test-31c1f",
  storageBucket: "test-31c1f.appspot.com",
  messagingSenderId: "599326338430",
  appId: "1:599326338430:web:eba1e13a0eb44d1f33572f",
  measurementId: "G-YLT2FJHHJ5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
