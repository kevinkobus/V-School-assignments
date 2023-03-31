import React from "react";

function App() {



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
           
            
          />
          <h3>Color 2:</h3>
          <input
            className="color-input"
            type="color"
            name="color2"
           
            
          />
          <h3>Angle:</h3>
          <input
            className="angle-input"
            
          />
          <h3>Gradient Code:</h3>
          <textarea 
          readOnly
          className="gradient-code" 
          value="Text area text goes here" 
          />

        </form>
      </div>
      <div className="gradient-display"></div>
    </main>

    //     {/* <textarea className="colorBox" style=background: linear-gradient(50deg, #FFFF00 , #000000);

    //       -moz-background: linear-gradient(50deg, #FFFF00 , #000000);

    //       -webkit: linear-gradient(50deg, #FFFF00 , #000000)
    //       /> */}
  );
}

export default App;
