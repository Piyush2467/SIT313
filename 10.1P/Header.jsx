import React from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>DEV@Deakin</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍︎ Search..."
            className="search-input"
          />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>

      <img
        className="header-banner"
        src="https://media.assettype.com/freepressjournal/2023-08/cfa589f8-b24d-4a11-b1bb-b308cad4eccb/Untitled_design__74_.png?width=1200"
        alt="Banner"
      />
    </div>
  );
}

export default Header;
