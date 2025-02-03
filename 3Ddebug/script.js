document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        document.getElementById('message').innerText = 'Авторизация успешна!';
    } else {
        document.getElementById('message').innerText = 'Неверное имя пользователя или пароль.';
    }
});
