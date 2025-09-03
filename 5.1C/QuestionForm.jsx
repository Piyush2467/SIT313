import React, { useState } from "react";

function QuestionForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, desc, tags });
    alert("Question Submitted!");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        placeholder="Start your question with how, what, why, etc."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Describe your problem</label>
      <textarea
        placeholder="Describe your problem"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />

      <label>Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button type="submit" className="post-btn">Post</button>
    </form>
  );
}

export default QuestionForm;
