document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (localStorage.getItem(newUsername)) {
        alert('Username already exists');
    } else {
        localStorage.setItem(newUsername, newPassword);
        alert('Registration successful');
        window.location.href = 'login.html'; // Redirect to login page
    }
});
