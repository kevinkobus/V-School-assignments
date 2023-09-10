import React, { useContext, useState, useEffect } from "react";
import IssueForm from "./IssueForm";
import { IssuesContext } from "../context/IssuesContext";
import CommentList from "./CommentList";
// import { UserContext } from "../context/UserContext";
// import { Link } from "react-router-dom";

function Issue(props) {
  // console.log(props)
  const { title, description, username, _id, handleChange, inputs, comment } =
    props;
  const { deleteIssue, editIssue, issueId, getIssueComments } =
    useContext(IssuesContext);

  const [editToggle, setEditToggle] = useState(false);

  // console.log(inputs)

  function handleIssueEdit() {
    editIssue(_id, inputs);
    setEditToggle((prevToggle) => !prevToggle);
  }

  return (
    <div className="issue-box">
      {!editToggle ? (
        <>
          <div className="issue-grid">
            <div className="issue-box1">
              <h1>Issue: {title}</h1>
              <h3>Description: {description}</h3>
              <h3>Posted by: {username}</h3>
            </div>
            <div className="issue-box2">
              <h4>Is this a big issue?</h4>
              <button id="yes-btn">Yes</button>
              <p>Yes votes: 100</p>
              {/* {yesVotes} */}
              <button id="no-btn">No</button>
              <p>No votes: 100</p>
              {/* {noVotes} */}
            </div>
            <div className="issue-box3">
              <button id="edit-issue-btn"
                onClick={() => setEditToggle((prevToggle) => !prevToggle)}
              >
                Edit
              </button>
              <button id="delete-issue-btn" onClick={() => deleteIssue(_id)}>Delete</button>
            </div>
          </div>
          <CommentList />
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
