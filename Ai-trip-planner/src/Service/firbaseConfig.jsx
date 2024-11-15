// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD1_5fOh6Q_5DSHfri09N_YPIk_YY7i0YE",
  authDomain: "ai-trip-planner-15102.firebaseapp.com",
  projectId: "ai-trip-planner-15102",
  storageBucket: "ai-trip-planner-15102.appspot.com",
  messagingSenderId: "772643900",
  appId: "1:772643900:web:b68a954d800d14238df739",
  measurementId: "G-337P0QJNCN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);