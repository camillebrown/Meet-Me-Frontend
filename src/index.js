import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
// Components imports
import App from "./App";

// CSS imports
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/index.css";
import "./css/App.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
