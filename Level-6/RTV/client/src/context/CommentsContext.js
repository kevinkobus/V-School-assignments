import React, { useState, createContext } from "react";
import axios from "axios";

const CommentsContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function CommentsContextProvider(props) {
  // Set state for comments with empty array as default
  const initComment = {
    comments: [],
  };

  const [commentState, setCommentState] = useState(initComment);

  // Getting all comments for issues rendered
  function getAllComments() {
    userAxios
      .get("/api/comment")
      .then((res) => {
        setCommentState((prevState) => ({
          ...prevState,
          comments: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addComment(newComment) {
    userAxios
      .post("/api/comment", newComment)
      // .then((res) => console.log(res))
      .then((res) => {
        setCommentState((prevState) => ({
          ...prevState,
          comments: [...prevState, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  return (
    <CommentsContext.Provider
      value={{
        ...commentState,
        getAllComments,
        addComment,
      }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
}

export { CommentsContextProvider, CommentsContext };