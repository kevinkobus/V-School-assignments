import React from "react";
import boxes from "../boxes";

function DjSquares(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    const colors = {
        backgroundColor: props.colorChange ? "#000000" : "#ffffff"
    }
    const squareElements = squares.map(square => (
        <div className="box" key={square.id} style={colors}></div>
    ))

    return (
        <div className="box-container">
            {squareElements}
            <button>Small time DJ</button>
        </div>
    )

}

export default DjSquares;
