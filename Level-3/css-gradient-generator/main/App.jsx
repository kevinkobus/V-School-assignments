import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <main>
      <h1>CSS Gradient Generator Tool</h1>
      <div className="container-box">
        <form>
          <input
            className="color-input" 
            type="color"
            name="color1"
            onChange={handleChange}
          
          />
        </form>
      </div>

    </main>
    
  )
}

export default App
