import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9RcH909JhD99qfMjny7suBMWhb9rS8uM",
  authDomain: "lofty-reserve-362916.firebaseapp.com",
  projectId: "lofty-reserve-362916",
  storageBucket: "lofty-reserve-362916.appspot.com",
  messagingSenderId: "586149263001",
  appId: "1:586149263001:web:e5b5e1265b826736642a08",
  measurementId: "G-7WKS69DV17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const auth = getAuth(app);
export const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
export const currentUser = auth?.currentUser;

export { firebase, auth, authentication, provider };
