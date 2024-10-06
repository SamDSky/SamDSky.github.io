// script.js

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Basic validation
    if (name && email) {
        // Display success message
        document.getElementById('formMessage').innerText = `Thank you, ${name}! Your message has been sent.`;
    } else {
        // Display error message
        document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }
});
