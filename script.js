document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Přihlášení odesláno — funkce bude brzy doplněna.');
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Registrace odeslána — funkce bude brzy doplněna.');
});

function toggleForms() {
  const login = document.getElementById('loginForm');
  const register = document.getElementById('registerForm');
  login.style.display = login.style.display === 'none' ? 'block' : 'none';
  register.style.display = register.style.display === 'none' ? 'block' : 'none';
}