import React, { useContext } from "react";
import Comment from "./Comment.js";
import CommentForm from "./CommentForm.js"
import { IssuesContext } from "../context/IssuesContext.js";

function CommentList(props) {
  const { comments } = useContext(IssuesContext);
  // const {} = props;


  // console.dir(comments);

  return (
    <div className="comment-section">
      <div>
        <CommentForm />
      </div>
      
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
