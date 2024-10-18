// Simulated login logic for testing
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value; // Change this line
    const password = document.getElementById('password').value;

    // Simulated user roles and credentials
    const users = {
        'admin@test.com': { role: 'admin', password: 'adminpass' },
        'leader@test.com': { role: 'community-leader', password: 'leaderpass' },
        'Supporter@test.com': { role: 'supporter', password: 'Supporterpass' }
    };

    // Check if the credentials match any test user
    if (users[username] && users[username].password === password) { // Change this line
        const role = users[username].role; // Change this line

        // Redirect based on role
        if (role === 'admin') {
            window.location.href = 'dashboard_admin.html'; // Admin dashboard
        } else if (role === 'community-leader') {
            window.location.href = 'dashboard_leader.html'; // Community leader dashboard
        } else if (role === 'supporter') {
            window.location.href = 'dashboard_supporter.html'; // Supporter dashboard
        }
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});


document.getElementById('sign-up-btn').addEventListener('click', function() {
    window.location.href = 'support.html';
});