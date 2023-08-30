import React, { useContext, useEffect } from "react";
import PublicIssue from "./PublicIssue.js";
import { IssuesContext } from "../context/IssuesContext";

function PublicIssueList() {
  const { publicIssues, getPublicIssues } = useContext(IssuesContext);

  useEffect(() => {
    getPublicIssues();
  }, []);

  return (
    <div className="public-issue-list">
      {publicIssues.map((publicIssue) => (
        <PublicIssue {...publicIssue} key={publicIssue._id} />
      ))}
    </div>
  );
}

export default PublicIssueList