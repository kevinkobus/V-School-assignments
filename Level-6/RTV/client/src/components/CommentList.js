import React, { useContext } from "react";
import Comment from "./Comment.js";
import CommentForm from "./CommentForm.js"
import { IssuesContext } from "../context/IssuesContext.js";

function CommentList(props) {
  const { comments } = useContext(IssuesContext);
  // const {} = props;


  // console.log(comments);

  return (
    <div className="comment-list-container">
      <CommentForm />
      {comments.map((comment) => (
        <Comment
         {...comment} 
         key={comment._id}
          />
      ))}
    </div>
  );
}

export default CommentList;
