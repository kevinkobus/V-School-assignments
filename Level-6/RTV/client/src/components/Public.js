import React from 'react'
import IssueList from './IssueList.js'

function Public(props){
  const { issues } = props;
  return (
    <div className="public">
      <h1>All Issues</h1>
      <IssueList issues={issues} />
    </div>
  )
}

export default Public