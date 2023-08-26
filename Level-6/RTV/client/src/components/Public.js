import React, { useContext } from "react";
import Issue from './Issue.js'
import { IssuesContext } from "../context/IssuesContext"

function Public(props){
  const { publicIssues } = useContext(IssuesContext)
  return (
    <div className="public">
      <h1>All Issues</h1>
      {publicIssues.map((publicIssue) => (
        <Issue {...publicIssue} key={publicIssue._id} />
      ))}
      
    </div>
  )
}

export default Public