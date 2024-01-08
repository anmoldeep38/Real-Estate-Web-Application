// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1b3e5.firebaseapp.com",
  projectId: "mern-estate-1b3e5",
  storageBucket: "mern-estate-1b3e5.appspot.com",
  messagingSenderId: "829600963700",
  appId: "1:829600963700:web:a537a3701274712ecc0521",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
