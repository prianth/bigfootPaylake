// scripts.js

// Select the form
const form = document.getElementById('contact-form');

// Add an event listener to the form
form.addEventListener('submit', function (event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Retrieve input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Perform additional email validation (optional)
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display a success message
    alert(`Thank you, ${name}! Your message has been sent. We will respond to ${email} shortly.`);

    // Optionally, clear the form
    form.reset();
});

// Helper function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
