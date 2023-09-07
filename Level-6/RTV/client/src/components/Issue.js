import React, { useContext, useState } from "react";
import IssueForm from "./IssueForm";
import { IssuesContext } from "../context/IssuesContext";
import CommentForm from "./CommentForm"
// import { UserContext } from "../context/UserContext";
// import { Link } from "react-router-dom";

function Issue(props) {
  // console.log(props.issues)
  const { title, description, _id, handleChange, inputs } = props;
  const { deleteIssue, editIssue } = useContext(IssuesContext);

  const [editToggle, setEditToggle] = useState(false);

  // console.log(inputs)

  function handleEditSubmit() {
    editIssue(_id, inputs);
    setEditToggle((prevToggle) => !prevToggle)
  }

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
          {/* <h3>View or add comment(s) on this issue</h3> */}
          <h2>Comments</h2>
          <CommentForm />
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
            submit={handleEditSubmit}
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

{
  /* <form onSubmit={handleEditSubmit} className="edit-issue-form">
            <label>Issue:</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              onChange={handleChange}
              placeholder="Title"
            />
            <label>Description:</label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              onChange={handleChange}
              placeholder="Description"
            />
            <button id="save-btn">
              Save
            </button>
          </form> */
}

// <button
//     id="close-btn"
//     onClick={() => setEditToggle((prevToggle) => !prevToggle)}
//   >
//     Close
//   </button>

// const {
//   token,
//   user: { username },
// } = useContext(UserContext);
