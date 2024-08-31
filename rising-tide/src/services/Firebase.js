// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdv0VKJpo1aUfAf5Vf6ilGth1ithYgJaw",
  authDomain: "rising-tide-convenience.firebaseapp.com",
  projectId: "rising-tide-convenience",
  storageBucket: "rising-tide-convenience.appspot.com",
  messagingSenderId: "347215972787",
  appId: "1:347215972787:web:5b2fdbc964ca6eb507e3c6",
  measurementId: "G-MT6V2TXJ49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);


// Initialize Analytics
const analytics = getAnalytics(app);

export { db, auth, analytics }; // Export Firestore and Analytics
