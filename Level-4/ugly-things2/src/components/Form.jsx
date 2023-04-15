// Component for form/input portion of app
// Pulls in ThemeContext and OpsContext to

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { OpsContext } from "./OpsContext"

function Form(props) {
  const { color } = useContext(ThemeContext);
  const { uglyCar, handleChange } = useContext(OpsContext)

  return (
    <div className="form-container">
      <form className="form">
      {/* <form onSubmit={handleSubmit}> */}
        <input
            className="input" 
            input="text"
            name="title"
            placeholder="Title"
            value={uglyCar.title}
            onChange={handleChange}
        />
        <input
            className="input" 
            input="text"
            name="imgUrl"
            placeholder="Image Url"
            value={uglyCar.imgUrl}
            onChange={handleChange}
        />
        <input
            className="input" 
            input="text"
            name="description"
            placeholder="Description"
            value={uglyCar.description}
            onChange={handleChange}
        />
        <button className={`${color}-submit-btn`}>Submit</button>
      </form>
    </div>
  );
}

export default Form;