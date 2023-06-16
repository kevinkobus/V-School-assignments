import React, { useState, useEffect } from "react";
import BountyForm from "./components/BountyForm";
import BountyCard from "./components/BountyCard";
import axios from "axios";

function App() {
  const [bountyList, setBountyList] = useState([]);

  // GET request to server and set bountyList state
  function getBounties() {
    axios
      .get("/api/bounties")
      // .then(res => console.log(res))
      .then((res) => setBountyList(res.data))
      .catch((err) => console.log(err));
  }

  // POST request to server and set bountyList state
  function addBounty(newBounty) {
    axios
      .post("/api/bounties", newBounty)
      // .then(res => console.log(res))
      .then((res) => {
        setBountyList((prevBountyList) => [...prevBountyList, res.data]);
      })
      .catch((err) => console.log(err));
  }

  // DELETE request to server and set bountyList state
  function deleteBounty(bountyId) {
    axios.delete(`/api/bounties/${bountyId}`)
    // .then(res => console.log(res))
    .then(res => {
      setBountyList(prevBountyList => prevBountyList.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  // PUT request to server for editing and then setting bountyList state
  function editBounty(updates, bountyId) {
    axios.put(`/api/bounties/${bountyId}`, updates)
    // .then(res => console.log(res))
    .then(res => {
      setBountyList(prevBountyList => prevBountyList.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }

  // useEffect to call getBounties function
  useEffect(() => {
    getBounties();
  }, []);

  return (
    <div className="App">
      <BountyForm 
      submit={addBounty}
      btnText="Add Bounty" 
      />
      <div className="bounty-container">
        {bountyList.map((bounty) => (
          <BountyCard 
          {...bounty} 
          key={bounty._id}
          deleteBounty={deleteBounty}
          editBounty={editBounty} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;