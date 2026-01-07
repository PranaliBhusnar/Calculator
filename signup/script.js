// 🔹 Firebase imports (MUST be at top)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔹 Firebase config (PASTE YOUR REAL VALUES)
const firebaseConfig = {
  apiKey: "AIzaSyD8kXxxxxxxx",
  authDomain: "myproject-12345.firebaseapp.com",
  projectId: "myproject-12345",
  storageBucket: "myproject-12345.appspot.com",
  messagingSenderId: "9876543210",
  appId: "1:9876543210:web:abcd1234"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Form elements
const form = document.getElementById("signupForm");
const message = document.getElementById("message");

// 🔹 Signup logic
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (email === "" || password === "" || confirmPassword === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters!";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }

    // 🔥 Firebase signup
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            message.style.color = "green";
            message.textContent = "Signup successful 🎉";
            form.reset();
        })
        .catch((error) => {
            message.style.color = "red";
            message.textContent = error.message;
        });
});
