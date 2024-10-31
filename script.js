document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send data to the server using fetch
    fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.text())
    .then(data => {
        // Display the server's response message
        document.getElementById('formMessage').innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('formMessage').innerText = 'An error occurred. Please try again.';
    });
});
