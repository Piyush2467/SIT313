import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sendGrid from "@sendgrid/mail";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Replace with your valid SendGrid API key
sendGrid.setApiKey("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");

app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  const emailContent = {
    to: email,
    from: "Piyush4854.se24@chitkara.edu.in",
    subject: "Welcome to DEV@Deakin",
    text: "Thanks for subscribing to DEV@Deakin!",
    html: "<h2>Thanks for subscribing to <b>DEV@Deakin</b>!</h2>",
  };

  sendGrid
    .send(emailContent)
    .then(() => {
      console.log(`Email sent successfully to ${email}`);
      res.send(`Success! A welcome email has been sent to ${email}`);
    })
    .catch((error) => {
      console.error("SendGrid error:", error);
      res.status(500).send("Failed to send email. Check server logs.");
    });
});

// Test route to verify server is running
app.get("/", (req, res) => {
  res.send("✅ Newsletter API Server is running on port 3001!");
});

app.listen(3001, () => console.log("Server running at http://localhost:3001"));