import React, { useContext, useEffect } from "react";
import Issue from './Issue.js'
import { IssuesContext } from "../context/IssuesContext"

function Public(props){
  const { publicIssues, getPublicIssues } = useContext(IssuesContext)

  useEffect(() => {
    getPublicIssues()
  }, [])

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