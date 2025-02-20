// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanager-c1875.firebaseapp.com",
  projectId: "taskmanager-c1875",
  storageBucket: "taskmanager-c1875.firebasestorage.app",
  messagingSenderId: "660765825015",
  appId: "1:660765825015:web:a46248df7aff85b084c0f2",
  measurementId: "G-X1G8ZLL3N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);