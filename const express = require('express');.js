const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Handle form submission (assuming your form posts data to '/submit')
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received submission: ${name}, ${email}, ${message}`);
    res.send(`Thank you for your message, ${name}!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
