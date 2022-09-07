// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBmK5DwSG8N_gNIsBXa8vE-SIAM_iJS0U",
  authDomain: "react-test-f0083.firebaseapp.com",
  projectId: "react-test-f0083",
  storageBucket: "react-test-f0083.appspot.com",
  messagingSenderId: "6882613416",
  appId: "1:6882613416:web:69665a9a024b2e4b364a9d",
  measurementId: "G-7R1T36FDNQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
