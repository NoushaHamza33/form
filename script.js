document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
        document.getElementById('errorMessage').textContent = 'Please enter a valid email address.';
        return;
    }

    if (username.length < 5) {
        document.getElementById('errorMessage').textContent = 'Username must be at least 5 characters long.';
        return;
    }

    const hasUpperCase = /[A-Z]/.test(password);

    if (!hasUpperCase) {
        document.getElementById('errorMessage').textContent = 'Password must contain at least one uppercase letter.';
        return;
    }

    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSpecialChar) {
        document.getElementById('errorMessage').textContent = 'Password must contain at least one special character.';
        return;
    }
    const hasNumber = /[0-9]/.test(password);
    if (!hasNumber) {
        document.getElementById('errorMessage').textContent = 'Password must contain at least one number.';
        return;
    }

    
    const validUsername = 'user@gmail.com';
    const validPassword = 'User@123';

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
    
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});
