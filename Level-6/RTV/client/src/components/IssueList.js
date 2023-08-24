import React from "react";
import Issue from "./Issue.js";


function IssueList(props) {
  const { issues } = props;
  // console.log(issues)
  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <Issue {...issue} key={issue._id} />
      ))}
    </div>
  );
}

export default IssueList;
