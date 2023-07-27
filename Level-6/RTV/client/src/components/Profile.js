import React, { useContext } from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import Issue from './Issue'
import { UserContext } from '../context/UserContext'

function Profile(){
  const { user: { username }} = useContext(UserContext)
  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm />
      <h3>Your Issues</h3>
    </div>
  )
}

export default Profile