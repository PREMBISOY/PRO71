import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCEhND2KYBy-awfUJvnLYQLMVmj5oYJ274",
  authDomain: "eride-9b19e.firebaseapp.com",
  databaseURL: "https://eride-9b19e-default-rtdb.firebaseio.com",
  projectId: "eride-9b19e",
  storageBucket: "eride-9b19e.appspot.com",
  messagingSenderId: "462408233320",
  appId: "1:462408233320:web:3f778b7c314c49d28fe6dd"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
