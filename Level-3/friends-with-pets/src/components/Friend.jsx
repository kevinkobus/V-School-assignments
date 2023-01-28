import React from "react"
import data from "./src/data"

function Friend(props) {
   return (
    {/* <img src={props.img} className="friend-pic" /> */}
    <h2>{props.name}</h2>
    <h3>{props.age}</h3>
   )
}

export default Friend