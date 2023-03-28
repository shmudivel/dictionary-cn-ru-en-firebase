// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2EModKlgM3BQ4cPXEiR586Ijg3cZcwKk",
  authDomain: "shaft28032023-dictionary.firebaseapp.com",
  projectId: "shaft28032023-dictionary",
  storageBucket: "shaft28032023-dictionary.appspot.com",
  messagingSenderId: "252552567944",
  appId: "1:252552567944:web:01d36ab9ed2ad07223d33d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC2EModKlgM3BQ4cPXEiR586Ijg3cZcwKk",
//   authDomain: "shaft28032023-dictionary.firebaseapp.com",
//   projectId: "shaft28032023-dictionary",
//   storageBucket: "shaft28032023-dictionary.appspot.com",
//   messagingSenderId: "252552567944",
//   appId: "1:252552567944:web:01d36ab9ed2ad07223d33d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
