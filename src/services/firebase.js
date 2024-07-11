// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhFrKLCzLRGZYz-lt8c66w4OnBjp5vFQc",
  authDomain: "fantasyblog-39284.firebaseapp.com",
  projectId: "fantasyblog-39284",
  storageBucket: "fantasyblog-39284.appspot.com",
  messagingSenderId: "128698583572",
  appId: "1:128698583572:web:e7a9f889e3c65c5fccf501",
  measurementId: "G-KWSJXR9TYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }; 