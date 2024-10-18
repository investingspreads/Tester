document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('announcement-board');

    // Simulated current user for testing
    const currentUser = 'leader@example.com';

    // Retrieve announcements from localStorage
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];

    // Loop through each announcement and create a card
    announcements.forEach((announcement, index) => {
        const card = document.createElement('div');
        card.classList.add('announcement-card');
        card.setAttribute('onclick', 'toggleCard(this)');

        const title = document.createElement('h2');
        title.textContent = announcement.title;

        const collapsedText = document.createElement('p');
        collapsedText.classList.add('collapsed');
        collapsedText.textContent = announcement.message.substring(0, 75) + '...';

        const fullMessage = document.createElement('p');
        fullMessage.classList.add('full-message');
        fullMessage.style.display = 'none';
        fullMessage.textContent = announcement.message;

        // Append title, collapsed text, and full message to the card
        card.appendChild(title);
        card.appendChild(collapsedText);
        card.appendChild(fullMessage);

        // If the announcement was posted by the current user, add edit and delete buttons
        if (announcement.username === currentUser) {
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('cta-btn');
            editButton.onclick = function(event) {
                event.stopPropagation(); // Prevent card toggle on button click
                startEditAnnouncement(card, index);
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('cta-btn');
            deleteButton.onclick = function(event) {
                event.stopPropagation(); // Prevent card toggle on button click
                deleteAnnouncement(index);
            };

            // Append edit and delete buttons to the card
            card.appendChild(editButton);
            card.appendChild(deleteButton);
        }

        // Append the card to the announcement board
        board.appendChild(card);
    });
});

// Toggle card for expanding and collapsing messages
function toggleCard(card) {
    const collapsedText = card.querySelector('.collapsed');
    const fullMessage = card.querySelector('.full-message');

    if (fullMessage.style.display === 'none') {
        collapsedText.style.display = 'none';
        fullMessage.style.display = 'block';
    } else {
        collapsedText.style.display = 'block';
        fullMessage.style.display = 'none';
    }
}

// Start editing the announcement
function startEditAnnouncement(card, index) {
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    const announcement = announcements[index];

    // Remove the click event on the card to prevent toggling while editing
    card.removeAttribute('onclick');

    // Hide the original title, collapsed text, and full message
    card.querySelector('h2').style.display = 'none';
    card.querySelector('.collapsed').style.display = 'none';
    card.querySelector('.full-message').style.display = 'none';

    // Hide the edit and delete buttons
    const editButton = card.querySelector('button:nth-child(4)');
    const deleteButton = card.querySelector('button:nth-child(5)');
    editButton.style.display = 'none';
    deleteButton.style.display = 'none';

    // Create editable fields
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = announcement.title;
    titleInput.classList.add('edit-input'); // Style the input fields for a better appearance
    
    const messageInput = document.createElement('textarea');
    messageInput.rows = 4;
    messageInput.value = announcement.message;
    messageInput.classList.add('edit-input');

    // Append the fields to the card
    card.appendChild(titleInput);
    card.appendChild(messageInput);

    // Create a "Save" button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('cta-btn', 'save-btn');
    saveButton.onclick = function(event) {
        event.stopPropagation(); // Prevent card toggle on button click
        saveEditedAnnouncement(index, titleInput.value, messageInput.value);
    };

    // Append the save button to the card
    card.appendChild(saveButton);
}

// Save the edited announcement
function saveEditedAnnouncement(index, newTitle, newMessage) {
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];

    // Update the announcement with new data
    announcements[index].title = newTitle;
    announcements[index].message = newMessage;

    // Save the updated announcements back to localStorage
    localStorage.setItem('announcements', JSON.stringify(announcements));

    // Refresh the page to show the updated announcement
    window.location.reload();
}

// Delete announcement
function deleteAnnouncement(index) {
    // Retrieve announcements from localStorage
    let announcements = JSON.parse(localStorage.getItem('announcements')) || [];

    // Remove the selected announcement
    announcements.splice(index, 1);

    // Save the updated announcements list to localStorage
    localStorage.setItem('announcements', JSON.stringify(announcements));

    // Refresh the page to update the announcement board
    window.location.reload();
}
