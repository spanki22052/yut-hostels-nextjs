import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCvVxh6Pt_fDlC217QjZJXXDspVmR3q2Yw",
  authDomain: "yut-hostels.firebaseapp.com",
  databaseURL: "https://yut-hostels.firebaseio.com",
  projectId: "yut-hostels",
  storageBucket: "yut-hostels.appspot.com",
  messagingSenderId: "393504064575",
  appId: "1:393504064575:web:7c8541681c6c08a923648a",
  measurementId: "G-G37CJW53SD",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
