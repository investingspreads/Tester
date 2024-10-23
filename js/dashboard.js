// dashboard.js

// Example function to simulate fetching user data (replace with actual backend call)
function fetchUserData() {
    // Normally, this data would come from your back-end (e.g., API call)
    return {
        userId: 1, // Example user ID
        gifts: [1, 2] // Example gift IDs the user owns
    };
}

// Function to display the user's gifts
function displayUserGifts() {
    const userData = fetchUserData(); // Fetch user data
    const giftsSection = document.getElementById('gifts-section');
    
    // Clear existing content
    giftsSection.innerHTML = '';

    // Define available gifts
    const giftData = {
        1: 'Gift 1: Free eBook on Finance Management',
        2: 'Gift 2: Discount Code for Shopping',
        // Add more gifts as needed
    };

    // Display gifts based on user's gift IDs
    userData.gifts.forEach(giftId => {
        if (giftData[giftId]) {
            const giftDiv = document.createElement('div');
            giftDiv.className = 'gift-item';
            giftDiv.innerText = giftData[giftId];
            giftsSection.appendChild(giftDiv);
        }
    });
}

// Call the function to display gifts on page load
window.onload = displayUserGifts;
