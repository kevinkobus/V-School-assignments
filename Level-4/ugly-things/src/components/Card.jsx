import React from "react";
import { UglyContext } from "./Context";

function Card(props) {

  // const [editOption, setEditOption] = useState(false)
  // const [eidtData, setEditData] = useState({
  //     title: "",
  //     description: ""
  // })

  return (
    <>
      <div className="ugly-card">
        <h1 className="title">{}</h1>
        <img src="" alt="image here" />
        <h2 className="description">{}</h2>
      </div>
      <div>
        <button className="delete-btn" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Card;
