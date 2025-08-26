import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">DEV@Deakin</div>
      <input className="search" type="text" placeholder="Search..." />
      <div className="nav-buttons">
        <button className="btn">Post</button>
        <button className="btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
