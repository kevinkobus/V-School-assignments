import React, { useState, createContext } from "react";
import axios from "axios";

const IssueContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function IssueContextProvider(props){
// Setting state for user and public issues with empty arrays as default
const [userIssueState, setUserIssueState] = useState([]);
const [publicIssueState, setPublicIssueState] = useState([]);

// Setting the initial state for user and public issues
const initUserIssueState = {
  issues: [],
}
const initPublicIssueState = {
  publicIssues: [],
}

function addIssue(newIssue) {
  userAxios
    .post("/api/issue", newIssue)
    // .then((res) => console.log(res))
    .then((res) => {
      setUserState((prevState) => ({
        ...prevState,
        issues: [...prevState.issues, res.data],
      }));
      setAllIssues((prevIssues) => [...prevIssues, res.data]);
    })
    .catch((err) => console.log(err.response.data.errMsg));
}





// Getting all public issues
function getPublicIssues() {
  userAxios
    .get("/api/issue")
    .then((res) => setPublicIssueState(res.data))
    console.log(publicIssueState)
    .catch((err) => console.log(err));
}


    return (
        <IssueContext.Provider
          value={{
            
          }}
        >
          {props.children}
        </IssueContext.Provider>
      );
    }

    export { IssueContextProvider, IssueContext };



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