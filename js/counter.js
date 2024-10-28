// counter.js

// Simulate initial number of purchases
let certificateCount = 10; // Starting with 10 certificates (you can update this as needed)

// Update the purchase count on page load
document.addEventListener('DOMContentLoaded', function() {
    const certificateCounter = document.getElementById('certificate-count');
    certificateCounter.innerText = certificateCount;

    // Simulate real-time purchases (every 5 seconds, it adds a purchase)
    setInterval(() => {
        certificateCount++;
        certificateCounter.innerText = certificateCount;
    }, 5000); // Update every 5 seconds
});
