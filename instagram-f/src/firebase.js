// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
// import  firebase from "./firebase";
// import  firebase from "firebase/compat/app";
// import "firebase/firestore";

  const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAaiopy9D-h3_bjCf7am8DG4AyvV0ZAgiw",
        authDomain: "instagarm-clone-react-fccfb.firebaseapp.com",
        projectId: "instagarm-clone-react-fccfb",
        storageBucket: "instagarm-clone-react-fccfb.appspot.com",
        messagingSenderId: "732136915015",
        appId: "1:732136915015:web:1f3bd65d05887c4c9ff162",
        measurementId: "G-WWGHJ0RG7R"
      
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage().ref();

  export  {db,auth,storage};
  