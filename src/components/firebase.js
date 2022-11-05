// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChzarOvAFbqTbGEsOv8-TE-s84iG66dMM",
  authDomain: "shaft051122-dictionary.firebaseapp.com",
  projectId: "shaft051122-dictionary",
  storageBucket: "shaft051122-dictionary.appspot.com",
  messagingSenderId: "770652619773",
  appId: "1:770652619773:web:298be43751936c24410f94"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

