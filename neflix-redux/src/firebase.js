import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxh3Cdon9henmXmSCl8WB6fLv_CuTJHU4",
  authDomain: "netflix-b865e.firebaseapp.com",
  projectId: "netflix-b865e",
  storageBucket: "netflix-b865e.appspot.com",
  messagingSenderId: "567983454390",
  appId: "1:567983454390:web:864b9bd642f673aabe8e17",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
