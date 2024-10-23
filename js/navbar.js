window.addEventListener('load', adjustNavPosition);
window.addEventListener('resize', adjustNavPosition);

function adjustNavPosition() {
    const isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed
    const headerHeight = document.querySelector('header').offsetHeight;
    const navLinks = document.getElementById('nav-links');
    
    if (navLinks && isMobile) {
        navLinks.style.top = `${headerHeight}px`; // Adjust nav position for mobile
    } else if (navLinks) {
        navLinks.style.top = ''; // Reset on desktop to avoid conflicts
    }
}


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