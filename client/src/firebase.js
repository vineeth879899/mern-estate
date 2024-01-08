// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-89e02.firebaseapp.com",
  projectId: "mern-estate-89e02",
  storageBucket: "mern-estate-89e02.appspot.com",
  messagingSenderId: "679850587108",
  appId: "1:679850587108:web:2e2a318b17590332c00df1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
