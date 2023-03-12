import React, {useState, useEffect } from "react";
import axios from "axios"

function Color() {
    const [color, setColor] = useState("")
    const [randomColor, setRandomColor] = useState(false)

    // https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}

  useEffect(()=> {
    axios
    .get("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
    .then((response) => setColor(response.data.colors[0].hex))
    .catch((error) => console.log(error));
}, [randomColor])

console.log(color)

function clickNewColor() {
     setRandomColor(prevRandomColor => !prevRandomColor) 
}

const background = {
  backgroundColor: `#${color}`
}

  return (
    <main className="border">
      <div className="color-container" style={background}></div>
      <button onClick={clickNewColor}>Change Color</button>
    </main>
  );
}

export default Color;