import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "../styles/App.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    // Update state based on input name and value
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 1. Authenticate with Firebase using email and password
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      
      // 2. Navigate to the Home page upon successful login
      navigate("/home");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="page-layout">
      <div className="form-box">
        {/* Link to the Sign Up page */}
        <div className="signup-link">
          <Link to="/signup">Sign up</Link>
        </div>

        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Your password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}