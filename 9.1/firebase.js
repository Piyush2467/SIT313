// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoAKcutcnU_ZF7uNGaORnyNzlBtpO70",
  authDomain: "task-wek-7.firebseapp.com",
  projectId: "task-week-7",
  storageBucket: "task-week-7.firebasestage.app",
  messagingSenderId: "30587415407",
  appId: "1:305874154057:web:60fb7152a47c25394598"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
