/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

// Cofigration to make user select an account
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//  functions that create's a popUp for google signIn
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//  functions that redirects for google signIn
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Getting DataBase form Firestore
export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth, additionalInfo ={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error, "error while creating the error");
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
