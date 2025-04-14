import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Registrace proběhla úspěšně!');
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert('Chyba při registraci: ' + error.message);
    });
});
