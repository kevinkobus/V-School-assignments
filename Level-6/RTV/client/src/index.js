import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import "./css/styles.css"
import UserContext from "./context/UserContextProvider"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
