import React, { useContext } from "react";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";
import { UserContext } from "../context/UserContext";
import { IssuesContext } from "../context/IssuesContext"

function Profile() {

  const {
    addUserIssue,
    issues,
  } = useContext(IssuesContext);

  const {
    user: { username }
  } = useContext(UserContext)

  // console.log(issues)
  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm addUserIssue={addUserIssue} />
      <h3>Your Issues</h3>
      <IssueList issues={issues} />
    </div>
  );
}

export default Profile;
