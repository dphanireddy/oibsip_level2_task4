document.addEventListener('DOMContentLoaded', () => {
    showLogin();
});

function showLogin() {
    document.getElementById('loginSection').style.display = 'flex';
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('securedPage').style.display = 'none';
}

function showRegister() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'flex';
    document.getElementById('securedPage').style.display = 'none';
}

function showSecuredPage(username) {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('securedPage').style.display = 'flex';
    document.getElementById('userWelcome').innerText = username;
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful!');
        showLogin();
    } else {
        alert('Please fill in all fields');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        showSecuredPage(username);
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    showLogin();
}
