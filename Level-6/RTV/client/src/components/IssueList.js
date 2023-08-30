import React, { useContext, useEffect } from "react";
import Issue from "./Issue.js";
import { IssuesContext } from "../context/IssuesContext.js";


function IssueList() {
  const { issues, getUserIssues } = useContext(IssuesContext)
 
  // console.log(issues)

  useEffect(() => {
    getUserIssues();
  }, []);

  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <Issue {...issue} key={issue._id} />
      ))}
    </div>
  );
}

export default IssueList;
