// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEAjUwFC4YmNFn_ooG-bb1nyxMs8u0Nco",
  authDomain: "shaft-dictionary-webapp.firebaseapp.com",
  projectId: "shaft-dictionary-webapp",
  storageBucket: "shaft-dictionary-webapp.appspot.com",
  messagingSenderId: "1018268022730",
  appId: "1:1018268022730:web:4c2648a9a7aa521ffa4133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
