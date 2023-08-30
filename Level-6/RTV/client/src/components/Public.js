import React, { useContext } from "react";
import PublicIssueList from "./PublicIssueList.js";
import { IssuesContext } from "../context/IssuesContext";

function Public() {
  const { publicIssues } = useContext(IssuesContext);


  return (
    <div className="public">
      <h1 className="all-issues">All Issues</h1>
      <PublicIssueList publicIssues={publicIssues} />
    </div>
  );
}

export default Public;