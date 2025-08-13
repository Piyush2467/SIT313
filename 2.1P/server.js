// Import Express framework
const express = require('express');

// Import body-parser to handle form data
const bodyParser = require('body-parser');

// Import path module to work with file paths
const path = require('path');

// Import SendGrid's mail package
const sgMail = require('@sendgrid/mail');

// Load environment variables from .env file
require('dotenv').config();

// Create an Express app instance
const app = express();

// Define the port (from .env or default to 3000)
const PORT = process.env.PORT || 3000;

// Set SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware: parse form data from POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware: serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route: serve the HTML form when user visits homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route: handle form submission (send welcome email)
app.post('/subscribe', (req, res) => {
  const { email } = req.body; // Get email from form input

  // Email details
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL, // Must be a verified SendGrid sender
    subject: 'Welcome to Dev@Deakin!',
    html: `<h1>Welcome to Dev@Deakin</h1><p>We’re happy you joined us!</p>`,
  };

  // Send the email using SendGrid
  sgMail
    .send(msg)
    .then(() => {
      res.send(`<h2>Email sent successfully to ${email}</h2><a href="/">Back</a>`);
    })
    .catch((error) => {
      console.error(error);
      res.send(`<h2>Failed to send email. Check console.</h2><a href="/">Back</a>`);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
