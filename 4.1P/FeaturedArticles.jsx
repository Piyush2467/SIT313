import React from "react";
import "./App.css";

const articles = [
  { id: 1, title: "React vs Vue", desc: "e.g., React OR Vue", rating: 5, author: "John Doe", img: "https://picsum.photos/300/200?random=1" },
  { id: 2, title: "Mastering Node.js", desc: "e.g., NodeJS", rating: 4.5, author: "Jane Smith", img: "https://picsum.photos/300/200?random=2" },
  { id: 3, title: "React Hooks Explained", desc: "e.g., React Hooks", rating: 5, author: "Alex Lee", img: "https://picsum.photos/300/200?random=3" }
];

const FeaturedArticles = () => {
  return (
    <div className="card-grid">
      {articles.map(article => (
        <div className="card" key={article.id}>
          <img src={article.img} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.desc}</p>
          <p>⭐ {article.rating} | {article.author}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedArticles;
