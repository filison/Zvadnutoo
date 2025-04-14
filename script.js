import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

document.getElementById("register-button").addEventListener("click", () => {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Úspěšně zaregistrováno!");
    })
    .catch((error) => {
      alert("Chyba při registraci: " + error.message);
    });
});