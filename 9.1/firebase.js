// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChTrVpn8-4eNkU44cMSYfXlHRtfJqik6o",
  authDomain: "task9-6224a.firebaseapp.com",
  projectId: "task9-6224a",
  storageBucket: "task9-6224a.firebasestorage.app",
  messagingSenderId: "817438347331",
  appId: "1:817438347331:web:72aa0803a9fe6f716084f6",
  measurementId: "G-JBYP70N4LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
