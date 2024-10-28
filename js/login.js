// Simulated login logic for testing
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value; // Change this line
    const password = document.getElementById('password').value;

    // Simulated user roles and credentials
    const users = {
        'Supporter@test.com': { role: 'supporter', password: 'Supporterpass' }
    };

    // Check if the credentials match any test user
    if (users[username] && users[username].password === password) { // Change this line
        const role = users[username].role; // Change this line

        // Redirect based on role
        if (role === 'supporter') {
            window.location.href = 'dashboard_supporter.html'; // Supporter dashboard
        }
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});