// Import the functions you need from the SDKs you need


import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkuO73e23aBLd0va_JRoNu3PusjopqMaE",
  authDomain: "movieflix-c87f5.firebaseapp.com",
  projectId: "movieflix-c87f5",
  storageBucket: "movieflix-c87f5.appspot.com",
  messagingSenderId: "879058279875",
  appId: "1:879058279875:web:a24db13f50a18d9ab4f176",
  measurementId: "G-8RY35J3042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const analytics = getAnalytics(app);