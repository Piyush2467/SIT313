import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedTutorials from "./FeaturedTutorials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="main-content">
        <h2>Featured Articles</h2>
        <FeaturedArticles />
        <button className="see-all-btn">See all articles</button>

        <h2>Featured Tutorials</h2>
        <FeaturedTutorials />
        <button className="see-all-btn">See all tutorials</button>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
