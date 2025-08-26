import React from "react";
import "./App.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <p>SIGN UP FOR OUR DAILY INSIDER</p>
      <input type="email" placeholder="Enter your email" />
      <button className="btn">Subscribe</button>
    </div>
  );
};

export default Newsletter;
