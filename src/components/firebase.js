// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm8IU2PSMMBtBHiyrBiszUf7YylO6rkpg",
  authDomain: "shaft12122022-dictionary.firebaseapp.com",
  projectId: "shaft12122022-dictionary",
  storageBucket: "shaft12122022-dictionary.appspot.com",
  messagingSenderId: "261275179208",
  appId: "1:261275179208:web:dd4e40c5a663f038b6adfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
