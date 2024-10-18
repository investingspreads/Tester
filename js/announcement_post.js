document.getElementById('announcement-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;

    // Retrieve existing announcements from localStorage or initialize an empty array
    let announcements = JSON.parse(localStorage.getItem('announcements')) || [];

    // Add the new announcement with the username
    announcements.push({ username: username, title: title, message: message });

    // Save the updated announcements list to localStorage
    localStorage.setItem('announcements', JSON.stringify(announcements));

    // Redirect to the announcement board page
    window.location.href = 'announcement_board.html';
});
