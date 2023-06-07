import React, { useState, useEffect } from 'react'
import BountiesList from "./components/BountiesList"
import axios from "axios"

function App() {
const [bountyList, setBountyList] = useState([])

function getBounties() {
  axios.get("/api/bounties")
  // .then(res => console.log(res))
  .then((res) => setBountyList(res.data))
  .catch(err => console.log(err))
}


useEffect(() => {
  getBounties()
}, [])

  return (
      <div className="App">
        <BountiesList 
        bountyList={bountyList}
        />
      </div>
      
  )
}

export default App
