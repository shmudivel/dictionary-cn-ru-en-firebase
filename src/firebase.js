// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMEXxhW3Uhh3uHqLAhM4Pv9ytTefI9-V4",
  authDomain: "online-words-dictionary.firebaseapp.com",
  projectId: "online-words-dictionary",
  storageBucket: "online-words-dictionary.appspot.com",
  messagingSenderId: "523262205153",
  appId: "1:523262205153:web:2469cc18b86fa1a97faba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)