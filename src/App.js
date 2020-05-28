import React from "react";
import logo from "./logo.svg";
import ThemeToggle from "./ThemeToggle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ThemeToggle />
      </header>
    </div>
  );
}

export default App;
