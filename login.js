document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demo purposes, we're using localStorage for user credentials
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert('Login successful');
        localStorage.setItem('loggedInUser', username); // Store logged-in user
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert('Invalid username or password');
    }
});
