// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsDOPYKk3Gy8mZ04QO_DHKPk7y-wS9upE",
  authDomain: "shaft1122-dictionary.firebaseapp.com",
  projectId: "shaft1122-dictionary",
  storageBucket: "shaft1122-dictionary.appspot.com",
  messagingSenderId: "972298872861",
  appId: "1:972298872861:web:5be6d357b960757bc23ef4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)





