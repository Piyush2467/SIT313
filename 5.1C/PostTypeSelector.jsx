import React from "react";

function PostTypeSelector({ postType, setPostType }) {
  return (
    <div className="selector-container">
      <span>Select Post Type: </span>
      <label>
        <input
          type="radio"
          value="question"
          checked={postType === "question"}
          onChange={(e) => setPostType(e.target.value)}
        />
        Question
      </label>
      <label>
        <input
          type="radio"
          value="article"
          checked={postType === "article"}
          onChange={(e) => setPostType(e.target.value)}
        />
        Article
      </label>
    </div>
  );
}

export default PostTypeSelector;
