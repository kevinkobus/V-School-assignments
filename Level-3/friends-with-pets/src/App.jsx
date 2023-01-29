import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FriendList from "./components/FriendList"
import './App.css'

function App() {
  return (
    <div className="App">
        <Header />
        <FriendList />
        <Footer />
    </div>
  )
}

export default App