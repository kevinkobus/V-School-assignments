// Component for individual ugly car card

import React, { useContext } from "react";
// import { OpsContext } from "./OpsContext";



function Card(props) {

    // const { handleDelete } = useContext(OpsContext) 

    return (
        <div className="card-container">
            <div className="ugly-car-card">
                <h1 className="card-title">{props.car.title}</h1>
                <img src={props.car.imgUrl} alt="ugly car image" className="ugly-car-pic" />
                <h2 className="card-description">{props.car.description}</h2>
            </div>
            <button className="delete-btn">Delete</button>
            <button className="edit-btn">Edit</button>
        </div>
    )
}

export default Card

// onClick={() => handleEdit()}
// onClick={() => handleDelete()}



  