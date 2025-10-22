import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h1>Explore</h1>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div>
          <h1>Support</h1>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h1>Stay connected</h1>
          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </div>
        </div>
      </div>
      <h1 className="footer-title">DEV@Deakin 2022</h1>
      <pre className="footer-links">
        Privacy Policy  Terms  Code of Conduct
      </pre>
    </footer>
  );
}

export default Footer;
