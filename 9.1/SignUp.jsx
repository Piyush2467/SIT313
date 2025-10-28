import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "../styles/App.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // 1. Create user account in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 2. Store user details (first name, last name) in Firestore DB
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      });

      alert("Account created successfully! Please log in.");
      // 3. Navigate to the Login page
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="page-layout">
      <div className="form-box">
        {/* Login link in top-right corner */}
        <div className="signup-link">
          <Link to="/login">Login</Link>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Create a DEV@Deakin Account</h2>
          <input
            name="firstName"
            placeholder="First Name*"
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name*"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email*"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password*"
            onChange={handleChange}
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password*"
            onChange={handleChange}
            required
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}