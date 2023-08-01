// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsmJz5twRgJj-nT07PjH1QL8pjd7IborA",
    authDomain: "messfriendger.firebaseapp.com",
    projectId: "messfriendger",
    storageBucket: "messfriendger.appspot.com",
    messagingSenderId: "534487817863",
    appId: "1:534487817863:web:3dc88302f0bb1d1fa4e222",
    measurementId: "G-9ZXEPEHJMW"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const storage = getStorage();
export { auth, googleProvider, facebookProvider, storage };
export default db;