import React from "react"
import data from "./src/data"

function Pets(props) {
    return (
        {/* <img src={props.pets.petImg} className="pet-pic" /> */}
        <h2>{props.pets.name}</h2>
        <h3>{props.pets.breed}</h3>
    )
}

export default Pets