// Import Firebase Auth SDK
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDawz_TAF3dK9wV7j_5aBFhocJKIqc3kbk",
  authDomain: "sia2finals.firebaseapp.com",
  projectId: "sia2finals",
  storageBucket: "sia2finals.firebasestorage.app",
  messagingSenderId: "621082868987",
  appId: "1:621082868987:web:7eb5cbb1f5f25fbbd0445e",
  measurementId: "G-NLWNRVY1BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign out the user
signOut(auth).then(() => {
  // Redirect to login page after logging out
  window.location.href = 'login.html';
}).catch((error) => {
  console.error('Error signing out: ', error);
});
