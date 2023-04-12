import React, { useContext } from "react";
import { UglyContext } from "./Context";

function InputsForm(props) {
  const { handleChange, handleSubmit, uglyThing } = useContext(UglyContext);

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <input
          input="text"
          name="title"
          placeholder="Title"
          value={uglyThing.title}
          onChange={handleChange}
          className="input"
        />
        <input
          input="text"
          name="imgUrl"
          placeholder="Image Url"
          value={uglyThing.imgUrl}
          onChange={handleChange}
          className="input"
        />
        <input
          input="text"
          name="desctiption"
          placeholder="Description"
          value={uglyThing.description}
          onChange={handleChange}
          className="input"
        />

        <button type="submit" className="submit-btn-green">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputsForm;
