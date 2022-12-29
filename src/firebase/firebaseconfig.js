// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFlbuQvj2FzqMGz-i4okmfu9Koc5MCjx0",
  authDomain: "todos-d5c69.firebaseapp.com",
  projectId: "todos-d5c69",
  storageBucket: "todos-d5c69.appspot.com",
  messagingSenderId: "688205408981",
  appId: "1:688205408981:web:12ceac54c9fe90e593d05c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app