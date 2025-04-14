


import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Přihlášení úspěšné!");
      // window.location.href = "/app.html"; // přesměrování pokud chceš
    })
    .catch((error) => {
      alert("Chyba: " + error.message);
    });
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registrace úspěšná!");
      toggleForms();
    })
    .catch((error) => {
      alert("Chyba: " + error.message);
    });
});

window.toggleForms = function () {
  const login = document.getElementById('loginForm');
  const register = document.getElementById('registerForm');
  login.classList.toggle('active');
  register.classList.toggle('active');
};