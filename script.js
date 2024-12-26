// scripts.js

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent. We will respond to ${email} shortly.`);
    } else {
        alert('Please fill out all fields before submitting the form.');
    }
}
