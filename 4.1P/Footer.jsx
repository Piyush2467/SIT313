import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Stay connected</h4>
          <p>[Facebook] [Twitter] [Instagram]</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <p>Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </footer>
  );
};

export default Footer;
