import React, { useState, useContext } from "react";
import { CommentsContext } from "../context/CommentsContext"

function CommentForm() {

const { addComment } = useContext(CommentsContext)

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
    <form onSubmit={commentSubmit} className="comment-container">
      <input
        id="comment-input"
        name="comment"
        type="text"
        value={commentInput}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
    </form>
  );
}

export default CommentForm;