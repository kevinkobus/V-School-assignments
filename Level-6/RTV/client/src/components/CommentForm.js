import React, { useState, useContext } from "react";
import { IssuesContext } from "../context/IssuessContext";

function CommentForm() {
  const { addComment } = useContext(IssuesContext);

  const initCommentInput = "";

  const [commentInput, setCommentInput] = useState(initCommentInput);

  function handleCommentChange(e) {
    const { name, value } = e.target;
    setCommentInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function commentSubmit(e) {
    e.preventDefault();
    addComment(commentInput);
    setCommentInput(initCommentInput);
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={commentSubmit} >
        <input
          id="comment-input"
          name="comment"
          type="text"
          value={commentInput}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
      </form>
    </div>
  );
}

export default CommentForm;