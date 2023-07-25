import React, { useState } from "react";

const initInputs = {
  title: "",
  description: "",
  votesFor: "",
  votesAgainst: "",
};

function IssueForm() {
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
    // add and issue
  }

  const { title, description, votesFor, votesAgainst } = inputs;
  return (
    <form onSubmit={handleSubmit}>
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
      <input
        type="number"
        name="votesFor"
        value={votesFor}
        onChange={handleChange}
        placeholder="Votes For"
      />
      <input
        type="number"
        name="votesAgainst"
        value={votesAgainst}
        onChange={handleChange}
        placeholder="Votes Against"
      />
      <button>Add Issue</button>
    </form>
  );
}

export default IssueForm;
