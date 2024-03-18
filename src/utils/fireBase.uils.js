import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'


//  FireBase Project config data retrived form FireBase console
const firebaseConfig = {
  apiKey: "AIzaSyDnirKIKWxJXDXft4nG_IBLRdXWEbyCbbk",
  authDomain: "stylestore-db.firebaseapp.com",
  projectId: "stylestore-db",
  storageBucket: "stylestore-db.appspot.com",
  messagingSenderId: "793516005434",
  appId: "1:793516005434:web:fcd78149d398cd3b817d03",
  measurementId: "G-99LZ6CQQ10",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider();

// Cofigration to make user select an account
provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth();

//  functions that create's a popUp for google signIn
export const signInWithGooglePopup  = ()=> signInWithPopup(auth, provider);

// Getting DataBase form Firestore
export const db = getFirestore();

// const creatUserDocumentFromAuth = async (userAuth)=>{

// }
