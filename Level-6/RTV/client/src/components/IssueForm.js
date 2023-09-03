import React, { useState, useContext } from "react";
import { IssuesContext } from "../context/IssuesContext";

function IssueForm(props) {

  const { addUserIssue } = useContext(IssuesContext)

  const initInputs = {
    title: props.title || "",
    description: props.description || "",
  };

  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.submit(inputs, props._id)
    addUserIssue(inputs);
    setInputs(initInputs);
  }

  const { title, description } = inputs;
  return (
    <form onSubmit={handleSubmit} className="issue-form">
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
      <button id="add-issue-btn">{props.btnText}</button>
    </form>
  );
}

export default IssueForm;

// <input
//   type="number"
//   name="votesFor"
//   value={votesFor}
//   onChange={handleChange}
//   placeholder="Votes For"
// />
// <input
//   type="number"
//   name="votesAgainst"
//   value={votesAgainst}
//   onChange={handleChange}
//   placeholder="Votes Against"
// />

// votesFor: "",
// votesAgainst: ""

// votesFor, votesAgainst
