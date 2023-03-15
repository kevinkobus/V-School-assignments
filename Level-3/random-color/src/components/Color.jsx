import React, {useState, useEffect } from "react";
import axios from "axios"

function Color() {
    const [color, setColor] = useState("")
    const [randomColor, setRandomColor] = useState(false)
    const randomNum = Math.floor(Math.random() * 7)
    // https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}

  useEffect(()=> {
    axios
    .get("https://www.colr.org/json/colors/random/7")
    // .then ((response)=>console.log(response.data))
    .then((response) => setColor(response.data.colors[randomNum].hex))
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