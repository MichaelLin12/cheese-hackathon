// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmNrBPPFLMg-3brbw0_OZMvbfOjMNfMOM",
  authDomain: "cheesehackathon.firebaseapp.com",
  databaseURL: "https://cheesehackathon-default-rtdb.firebaseio.com",
  projectId: "cheesehackathon",
  storageBucket: "cheesehackathon.appspot.com",
  messagingSenderId: "476080843828",
  appId: "1:476080843828:web:a942747ccffec6f6a8ee61",
  measurementId: "G-FN7GZRL1JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);