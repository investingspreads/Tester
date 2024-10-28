window.addEventListener('load', adjustDashboardActionsPosition);
window.addEventListener('resize', adjustDashboardActionsPosition);

function adjustDashboardActionsPosition() {
    const header = document.querySelector('header');
    const dashboardActions = document.querySelector('.dashboard-actions'); // Correct target

    if (header && dashboardActions) {
        const headerRect = header.getBoundingClientRect();
        const totalHeaderHeight = headerRect.height + headerRect.top; // Accounts for borders/margins
        dashboardActions.style.top = `${totalHeaderHeight}px`; // Adjust `.dashboard-actions` position
    }
}

// Toggle for Hamburger and Slide-in Dashboard
const hamburger2 = document.getElementById('hamburger2');
const dashboardContainer = document.getElementById('dashboard-container');

hamburger2.addEventListener('click', function () {
    dashboardContainer.classList.toggle('dashboard-open'); // Slide in/out the menu
});

// Close Dashboard Menu if Clicked Outside
document.addEventListener('click', function (event) {
    if (!dashboardContainer.contains(event.target) && !hamburger2.contains(event.target)) {
        dashboardContainer.classList.remove('dashboard-open'); // Close the menu
    }
});