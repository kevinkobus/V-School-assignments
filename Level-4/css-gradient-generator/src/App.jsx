import { useState } from "react";

function App() {
  const [color, setColor] = useState({
    color1: "#ff0000",
    color2: "#0000ff",
    angle: "50",
  });

function handleChange(e) {
  const {name, value}= e.target
  setColor(prevColor => {
    return {
      ...prevColor, [name]: value
    }
  })
}

const colorCode = `background: linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})
-moz-background: linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})
-webkit: linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})`

const colorGradient = `linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2})`

  return (
    <main className="background">
      <h1 className="title">CSS Gradient Generator Tool</h1>
      <div className="container-box">
        <h2>Color Gradient Options:</h2>
        <form className="color-form">
          <h3>Color 1:</h3>
          <input
            className="color-input"
            type="color"
            name="color1"
            placeholder="Color 1"
            value={color.color1}
            onChange={handleChange}
          />
          <h3>Color 2:</h3>
          <input
            className="color-input"
            type="color"
            name="color2"
            placeholder="Color 2"
            value={color.color2}
            onChange={handleChange}
          />
          <h3>Angle:</h3>
          <input
            className="angle-input"
            name="angle"
            type="number"
            min="0"
            max="180"
            value={color.angle}
            onChange={handleChange}
          />
          <h3>Gradient Code:</h3>
          <textarea
            readOnly
            className="gradient-code"
            value={colorCode}
          />
        </form>
      </div>
      <div
        className="gradient-display"
        style={{background: colorGradient}}>
      </div>
    </main>
  );
}

export default App;
