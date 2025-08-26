import React from "react";
import "./App.css";

const tutorials = [
  { id: 1, title: "JavaScript Basics", desc: "e.g., JS6", rating: 5, user: "coder123", img: "https://picsum.photos/300/200?random=4" },
  { id: 2, title: "React Router Guide", desc: "e.g., React Router", rating: 4.8, user: "webdev_guru", img: "https://picsum.photos/300/200?random=5" },
  { id: 3, title: "Express.js Crash Course", desc: "e.g., Express", rating: 4.9, user: "dev_master", img: "https://picsum.photos/300/200?random=6" }
];

const FeaturedTutorials = () => {
  return (
    <div className="card-grid">
      {tutorials.map(tutorial => (
        <div className="card" key={tutorial.id}>
          <img src={tutorial.img} alt={tutorial.title} />
          <h3>{tutorial.title}</h3>
          <p>{tutorial.desc}</p>
          <p>⭐ {tutorial.rating} | {tutorial.user}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedTutorials;
