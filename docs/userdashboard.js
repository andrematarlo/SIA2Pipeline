// Import Firebase Authentication SDK
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDawz_TAF3dK9wV7j_5aBFhocJKIqc3kbk",
  authDomain: "sia2finals.firebaseapp.com",
  projectId: "sia2finals",
  storageBucket: "sia2finals.firebasestorage.app",
  messagingSenderId: "621082868987",
  appId: "1:621082868987:web:7eb5cbb1f5f25fbbd0445e",
  measurementId: "G-NLWNRVY1BQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to load user email into the dashboard
function loadUserEmail(user) {
  const emailElement = document.getElementById('email');
  emailElement.textContent = user.email || "Email not available"; // Display user email or a fallback message
}

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
  } else {
    // Load user email if logged in
    loadUserEmail(user);
  }
});
