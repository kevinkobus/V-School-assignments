import React, { useContext, useEffect } from "react";
import Issue from "./Issue.js";
import { IssuesContext } from "../context/IssuesContext.js";
import { UserContext } from "../context/UserContext";

function IssueList(props) {
  const { issues, getUserIssues } = useContext(IssuesContext);

  const {
    user: { username }
  } = useContext(UserContext)

  const {handleChange, handleSubmit } = props

  useEffect(() => {
    getUserIssues();
  }, []);

// console.log(issues)

  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <Issue
          {...issue}
          key={issue._id}
          username={username}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ))}
    </div>
  );
}

export default IssueList;