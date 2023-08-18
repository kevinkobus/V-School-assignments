import React, { useState } from "react";

const initInputs = {
  title: "",
  description: "",
};

function IssueForm(props) {
  const [inputs, setInputs] = useState(initInputs);
  const { addIssue } = props

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addIssue(inputs)
    setInputs(initInputs)
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
      <button>Add Issue</button>
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
