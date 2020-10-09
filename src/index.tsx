import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./core/scss/.critical.scss";

ReactDOM.render(
  <BrowserRouter basename={""}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
