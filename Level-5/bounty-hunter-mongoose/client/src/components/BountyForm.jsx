import React, { useState } from "react";

function BountyForm(props) {
  const initialInputs = {
    headShot: props.headShot || "",
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    status: props.status || "",
    bounty: props.bounty || "",
    family: props.family || "",
  };
  const [inputs, setInputs] = useState(initialInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(inputs)
    props.submit(inputs, props._id);
    setInputs(initialInputs);
  }

  return (
    <form onSubmit={handleSubmit} className="bounty-form">
      <input
        type="text"
        name="headShot"
        placeholder="Picture URL"
        value={inputs.headShot}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={inputs.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={inputs.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={inputs.status}
        onChange={handleChange}
      />
      <input
        type="text"
        name="bounty"
        placeholder="Bounty"
        value={inputs.bounty}
        onChange={handleChange}
      />
      <input
        type="text"
        name="family"
        placeholder="Family"
        value={inputs.family}
        onChange={handleChange}
      />
      <button className="submit-btn">{props.btnText}</button>
    </form>
  );
}

export default BountyForm;
