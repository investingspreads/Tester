// Toggle for Hamburger 2 (Dashboard)
document.getElementById('hamburger2').addEventListener('click', function () {
    const dashboardActions = document.querySelector('.dashboard-actions');
    dashboardActions.classList.toggle('active'); // Toggle active class to show/hide links
});

// Close Dashboard Menu if Click Outside
document.addEventListener('click', function (event) {
    const dashboardActions = document.querySelector('.dashboard-actions');
    const hamburger2 = document.getElementById('hamburger2');

    if (!dashboardActions.contains(event.target) && !hamburger2.contains(event.target)) {
        dashboardActions.classList.remove('active'); // Close the menu if clicking outside
    }
});