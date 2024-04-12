// Import the functions you need from the SDKs you need


import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMq80OUIxxQwm_XL7dEh9TIPQMfoZ25X4",
  authDomain: "movieflix-bbba0.firebase.app",
  projectId: "movieflix-bbba0",
  storageBucket: "movieflix-bbba0.appspot.com",
  messagingSenderId: "677768773126",
  appId: "1:677768773126:web:042a4cdf5ff0a551434d87",
  measurementId: "G-JLGD9JEB9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const analytics = getAnalytics(app);