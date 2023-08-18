import React from "react";
import { Link } from "react-router-dom";

function Issue(props) {
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
      <div className="issue-btns">
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <Link to="/comments">Comments</Link>
    </div>
  );
}

export default Issue;