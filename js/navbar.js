// Toggle for Hamburger Menu (Main Site)
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle active class to show/hide links
});

// Close the Menu if Click Outside
document.addEventListener('click', function (event) {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');

    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active'); // Close the menu if clicking outside
    }
});