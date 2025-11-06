// Load environment variables from .env file into process.env
require('dotenv').config();

// Import required modules
const express = require('express');      // Web server framework
const path = require('path');            // Helps manage file/directory paths
const sgMail = require('@sendgrid/mail');// SendGrid email library

// Read environment variables or use defaults
const PORT = process.env.PORT || 3000;   // Server port (default to 3000)
const FROM_EMAIL = process.env.FROM_EMAIL; // Verified sender email (from SendGrid)
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY; // API key from SendGrid

// Safety check — if key or email missing, exit program with error
if (!SENDGRID_API_KEY || !FROM_EMAIL) {
  console.error('Missing SENDGRID_API_KEY or FROM_EMAIL in .env');
  process.exit(1); // Stop program immediately
}

// Tell SendGrid which API key to use
sgMail.setApiKey(SENDGRID_API_KEY);

// Create Express app instance
const app = express();

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Serve static files from "views" folder (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'views')));

// Route for home page — send index.html when user visits "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle form submission (POST request to /subscribe)
app.post('/subscribe', async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  const msg = {
    to: email,
    from: "piyush4854.se24@chitkara.edu.in",
    subject: 'Welcome to DEV@Deakin',
    text: `Thanks for subscribing to DEV@Deakin!`,
    html: `<p>Hi there —</p>
           <p>Thanks for subscribing to <strong>DEV@Deakin</strong>! We're excited to have you.</p>
           <p>— The DEV@Deakin Team</p>`,
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true, message: 'Subscription successful! Check your inbox.' });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Try again later.' });
  }
});

// Start the server and listen for incoming requests

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});