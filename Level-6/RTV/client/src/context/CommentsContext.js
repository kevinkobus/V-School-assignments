// NOT USING THIS FILE

import React, { createContext } from "react";
import axios from "axios";


const CommentsContext = createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function CommentsContextProvider(props) {


  return (
    <CommentsContext.Provider
      value={{
        ...commentState,
        getAllComments,
        getIssueComments,
        addComment,
      }}
    >
      {props.children}
    </CommentsContext.Provider>
  );
}

export { CommentsContextProvider, CommentsContext };
