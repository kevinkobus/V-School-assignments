// Component for individual ugly car card

import React, { useContext } from "react";
import { OpsContext } from "./OpsContext";



function Card(props) {

    const { uglyCar } = useContext(OpsContext) 

    return (
        <div className="card-container">
            <div className="ugly-car-card">
                <h1 className="card-title">{uglyCar.title}</h1>
                <img src={uglyCar.imgUrl} alt="ugly car image" />
                <h2 className="card-description">{uglyCar.description}</h2>
            </div>
            <button className="delete-btn">Delete</button>
            <button className="edit-btn">Edit</button>
        </div>
    )
}

export default Card

// onClick={() => handleDelete()}
// onClick={() => handleEdit()}



  