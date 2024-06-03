// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-H5eiAJ0f1Hq7jJA0SNyRvsiRmKVt9J8",
  authDomain: "cineflixgptt.firebaseapp.com",
  projectId: "cineflixgptt",
  storageBucket: "cineflixgptt.appspot.com",
  messagingSenderId: "96898716266",
  appId: "1:96898716266:web:fc2f8dda7725c8eacf7013",
  measurementId: "G-4EV4SKVSXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
