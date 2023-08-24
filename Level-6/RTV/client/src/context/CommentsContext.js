import React, { useState, createContext } from "react";
import axios from "axios";

const CommentsContext = createContext();

function CommentsContextProvider(props){

  // Set state for comments with empty array as default
  const [allComments, setAllComments] = useState([]);

    return (
        <CommentsContext.Provider
          value={{
            
          }}
        >
          {props.children}
        </CommentsContext.Provider>
      );
    }

    export { CommentsContextProvider, CommentsContext };