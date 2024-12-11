import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCayKf5ZtcOu8cSFRU85jAeEU9h6MoXxEo",
  authDomain: "mobilemech-cse3310.firebaseapp.com",
  projectId: "mobilemech-cse3310",
  storageBucket: "mobilemech-cse3310.appspot.com",
  messagingSenderId: "912072646854",
  appId: "1:912072646854:web:068b2257861ce5765bf7c7",
  measurementId: "G-92NYP3J7T3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

export const mechsCollection = collection(FIREBASE_DB, 'mechanics');
export const customersCollection = collection(FIREBASE_DB, 'customers');
export const appointmentsCollection = collection(FIREBASE_DB, 'appointments');