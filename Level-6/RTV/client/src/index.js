import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./css/styles.css";
import { UserContextProvider } from "./context/UserContext";
import { IssuesContextProvider } from "./context/IssuesContext";
// import { CommentsContextProvider } from "./context/CommentsContext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <CommentsContextProvider> */}
        <IssuesContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </IssuesContextProvider>
      {/* </CommentsContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
