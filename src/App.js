import React from "react";
import logo from "./logo.svg";

import { sum as add, multiple } from "./Math";

import "./App.css";

function App() {
  const sum = "SUM!";

  console.log(sum);
  console.log(add);
  console.log(multiple);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
