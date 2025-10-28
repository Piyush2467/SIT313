import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8loaHDQlMek29HNLvOzeI-VF7EuyUJF4",
  authDomain: "task-7-c8704.firebaseapp.com",
  projectId: "task-7-c8704",
  storageBucket: "task-7-c8704.firebasestorage.app",
  messagingSenderId: "421318253693",
  appId: "1:421318253693:web:512516ffc590e81990a514",
  measurementId: "G-2C68PKN8B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
