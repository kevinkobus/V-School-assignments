import React, { useContext, useState } from "react";
import { IssuesContext } from "../context/IssuesContext";
// import { UserContext } from "../context/UserContext";
// import { Link } from "react-router-dom";

function Issue(props) {

  const { title, description, _id, handleChange } = props;

  const { deleteIssue, editIssue } = useContext(IssuesContext);

  // const {
  //   token,
  //   user: { username },
  // } = useContext(UserContext);

  const [editToggle, setEditToggle] = useState(false);

  function handleDelete() {
    deleteIssue(_id);
  }

  function handleEdit() {
    setEditToggle(!editToggle);
  }

  function handleSave() {
    editIssue(_id);
    setEditToggle(false);
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
            <button>Yes (0)</button>
            <button>No (0)</button>
          </div>
          <div className="issue-btns">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <h3>View or add a comment on this issue</h3>
          {/* <Link to="/comments">Comments</Link> */}
        </>
      ) : (
        <>
          <div className="edit-form">
            <form onSubmit={handleSave} className="edit-issue-form">
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
              />
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"
              />
              <button>Save</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Issue;
