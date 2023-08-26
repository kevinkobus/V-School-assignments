import React, { useState, createContext } from "react";
import axios from "axios";


const IssuesContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});


// Setting the initial state for user and public issues
const initUserIssueState = {
  issues: [],
};
const initPublicIssueState = {
  publicIssues: [],
};
function IssuesContextProvider(props) {
  // Setting state for user and public issues with empty arrays as default
  const [userIssueState, setUserIssueState] = useState(initUserIssueState);
  const [publicIssueState, setPublicIssueState] = useState(initPublicIssueState);

  function addUserIssue(newIssue) {
    userAxios
      .post("/api/issue", newIssue)
      // .then((res) => console.log(res))
      .then((res) => {
        setUserIssueState((prevState) => ({
          ...prevState,
          issues: [...prevState.issues, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // Getting user issues
  function getUserIssues() {
    userAxios
      .get("/api/issue/user")
      .then((res) => {
        setUserIssueState((prevState) => ({
          ...prevState,
          issues: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // Getting all public issues
  function getPublicIssues() {
    userAxios
      .get("/api/issue")
      .then((res) => {
        setPublicIssueState((prevState) => ({
          ...prevState,
          publicIssues: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // Deleting a user issue
  function deleteIssue(issueId) {
    userAxios
      .put(`/api/issue/${issueId}`)
      .then((res) => {
        setUserIssueState((prevState) => ({
          ...prevState,
          issues: prevState.issues.filter((issue) => issue._id !== issueId),
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // Editing a user issue
  function editIssue(issueId, updatedIssue) {
    userAxios
      .put(`/api/issue/${issueId}`, updatedIssue)
      .then((res) => {
        setUserIssueState((prevState) => ({
          ...prevState,
          issues: prevState.issues.map((issue) =>
            issue._id === issueId ? res.data : issue
          ),
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // "Yes" voting an issue
  //   function yesVote(issueId) {
  //     userAxios
  //       .put(`/api/issue/${issueId}/yesVote`)
  //       .then((res) => {
  //         // console.log(res.data);
  //         setAllIssues((prevIssues) =>
  //           prevIssues.map((issue) => (issueId !== issue._id ? issue : res.data))
  //         );
  //         setUserState((prevUserState) => ({
  //           ...prevUserState,
  //           issues: prevUserState.issues.map((issue) =>
  //             issueId !== issue._id ? issue : res.data
  //           ),
  //         }));
  //         console.log(allIssues);
  //       })
  //       .catch((err) => console.log(err));
  //   }

  // "No" voting an issue
  //   function noVote(issueId) {
  //     userAxios
  //       .put(`/api/issue/${issueId}/noVote`)
  //       .then((res) => {
  //         setAllIssues((prevIssues) =>
  //           prevIssues.map((issue) => (issueId !== issue._id ? issue : res.data))
  //         );
  //         setUserState((prevUserState) => ({
  //           ...prevUserState,
  //           issues: prevUserState.issues.map((issue) =>
  //             issueId !== issue._id ? issue : res.data
  //           ),
  //         }));
  //         console.log(allIssues);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }

  // console.log(userIssueState)

  return (
    <IssuesContext.Provider
      value={{
        ...userIssueState,
        ...publicIssueState,
        addUserIssue,
        getUserIssues,
        getPublicIssues,
        deleteIssue,
        editIssue,
        // "Yes" voting an issue
        // "No" voting an issue
      }}
    >
      {props.children}
    </IssuesContext.Provider>
  );
}

export { IssuesContextProvider, IssuesContext };
