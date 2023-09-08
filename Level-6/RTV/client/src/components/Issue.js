import React, { useContext, useState, useEffect } from "react";
import IssueForm from "./IssueForm";
import { IssuesContext } from "../context/IssuesContext";
import { CommentsContext } from "../context/CommentsContext"
import CommentList from "./Comment"
// import { UserContext } from "../context/UserContext";
// import { Link } from "react-router-dom";

function Issue(props) {
  // console.log(props.issues)
  const { title, description, _id, handleChange, inputs, comment } = props;
  const { deleteIssue, editIssue, issueId } = useContext(IssuesContext);
  const { getIssueComments } = useContext(CommentsContext)

  const [editToggle, setEditToggle] = useState(false);

  // console.log(inputs)

  function handleIssueEdit() {
    editIssue(_id, inputs);
    setEditToggle((prevToggle) => !prevToggle)
  }

  useEffect(() => {
    getIssueComments(issueId);
  }, []);

  return (
    <div className="issue">
      {!editToggle ? (
        <>
          <div className="issue-info">
            <h1>Issue: {title}</h1>
            <h3>Description: {description}</h3>
          </div>
          <div className="issue-btns">
            <h4>Is this a big issue?</h4>
            <button id="yes-btn">Yes (0)</button>
            {/* {yesVotes} */}
            <button id="no-btn">No (0)</button>
            {/* {noVotes} */}
          </div>
          <div className="issue-btns">
            <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
              Edit
            </button>
            <button onClick={() => deleteIssue(_id)}>Delete</button>
          </div>
          <h3>View or add comment(s) on this issue</h3>
          <CommentList
            comment={comment}
          />
          {/* <Link to="/comments">Comments</Link> */}
        </>
      ) : (
        <>
          <IssueForm
            title={title}
            description={description}
            _id={_id}
            btnText="Save Edit"
            handleChange={handleChange}
            submit={handleIssueEdit}
          />
          <button
            id="cancel-btn"
            onClick={() => setEditToggle((prevToggle) => !prevToggle)}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default Issue;