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

    // Notify the user and submit the form to Formspree
    alert('Submitting your message...');
    form.submit(); // Allow the form to submit through Formspree
});

// Helper function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
