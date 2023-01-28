import React from 'react'
// import reactLogo from './assets/react.svg'
import Header from "./components/Header"
import Footer from "./components/Footer"
import FriendList from "./components/FriendList"
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      
        <Header />
        <FriendList />
        <Footer />
    </div>
  )
}

export default App
