import React from "react";
// import { Link } from "react-router-dom";

function PublicIssue(props) {
  const { title, description, _id } = props;
  return (
    <div className="issue">
      <div className="issue-info">
        <h1>Issue: {title}</h1>
        <h3>Description: {description}</h3>
      </div>
      <div className="issue-btns">
        <h4>Is this a big issue?</h4>
        <button>Yes</button>
        <button>No</button>
      </div>
      <h3>View or add a comment on this issue</h3>
      {/* <Link to="/comments">Comments</Link> */}
    </div>
  );
}

export default PublicIssue;
