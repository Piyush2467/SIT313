import React, { useState } from "react";
import PostTypeSelector from "./PostTypeSelector";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";
import "./App.css";

function App() {
  const [postType, setPostType] = useState("");

  return (
    <div className="app-container">
      <h2 className="section-title">New Post</h2>

      <PostTypeSelector postType={postType} setPostType={setPostType} />

      <div className="info-box">
        <h3>What do you want to ask or share</h3>
        <p>
          This section is designed based on the type of the post. It could be
          developed by conditional rendering.{" "}
          <span className="highlight">
            For post a question, the following section would be appeared.
          </span>{" "}
          <span className="highlight">
            For post an article, the following section would be appeared.
          </span>
        </p>
      </div>

      {postType === "question" && <QuestionForm />}
      {postType === "article" && <ArticleForm />}
    </div>
  );
}

export default App;
