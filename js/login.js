
// Función para manejar el inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        loginMessage.textContent = 'Inicio de sesión exitoso.';
        loginMessage.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'marketplace.html';
        }, 1000);
    } else {
        loginMessage.textContent = 'Nombre de usuario o contraseña incorrectos.';
        loginMessage.style.color = 'red';
    }
});

// Registro de usuario
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    loginMessage.textContent = 'Registro exitoso. Ahora puedes iniciar sesión.';
    loginMessage.style.color = 'green';
    document.getElementById('registerForm').reset();
});



