import React from "react";
import logo from "../../logo.svg";
import "./loading.scss";

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Loading.</p>
      </header>
    </div>
  );
}

export default Loading;
