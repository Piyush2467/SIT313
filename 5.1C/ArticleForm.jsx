import React, { useState } from "react";

function ArticleForm() {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, abstract, content, tags });
    alert("Article Submitted!");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        placeholder="Enter a descriptive title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Abstract</label>
      <input
        type="text"
        placeholder="Enter 1-paragraph abstract"
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
        required
      />

      <label>Article Text</label>
      <textarea
        placeholder="Enter 1-paragraph abstract"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <label>Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button type="submit" className="post-btn">Post</button>
    </form>
  );
}

export default ArticleForm;
