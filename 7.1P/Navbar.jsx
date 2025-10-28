import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "../styles/App.css";

// Navbar now accepts a prop for the current user
export default function Navbar({ currentUser }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have been signed out.");
      navigate("/login"); 
    } catch (error) {
      alert("Error signing out: " + error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
          DEV@Deakin
        </Link>
      </div>

      <div className="nav-center">
        <input className="search-bar" type="text" placeholder="Search..." />
      </div>

      <div className="nav-right">
        {/* "Post" link visible only when logged in */}
        {currentUser && <Link to="/post">Post</Link>}
        
        {/* Conditional rendering for Sign out / Login */}
        {currentUser ? (
          <button onClick={handleSignOut} className="signout-button">
            Sign out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}