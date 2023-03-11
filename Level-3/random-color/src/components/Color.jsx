import {useState, useEffect } from "react";
import axios from "axios"

function Color() {
    const [color, setColor] = useState("")
    const [randomColor, setRandomColor] = useState("")

    // https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}

useEffect(()=> {
    axios
    .get("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
    .then((response) => setColor(response.data.colors[0].hex))
    .catch((error) => console.log(error));
}, [])

function clickNewColor() {
    setRandomColor(color)
}

  return (
    <main className="border">
      <div className="color-container" style={{backgroundColor: `#${randomColor}`}}></div>
      <button onClick={clickNewColor}>Change Color</button>
    </main>
  );
}

export default Color;
