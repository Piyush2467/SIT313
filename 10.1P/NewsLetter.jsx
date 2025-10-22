import React, { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful! Check your inbox.");
        setEmail("");
      } else {
        setMessage("Failed to subscribe. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Check connection.");
    }
  };

  return (
    <div className="newsletter">
      <h1>SIGN UP FOR OUR DAILY INSIDER</h1>
      <input
        type="email"
        placeholder="Enter your email"
        className="newsletter-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="newsletter-button" onClick={handleSubscribe}>
        <h3>Subscribe</h3>
      </button>
      {message && <p className="newsletter-message">{message}</p>}
    </div>
  );
}

export default NewsLetter;
