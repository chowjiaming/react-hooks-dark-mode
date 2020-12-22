import logo from "./logo.svg";
import ThemeToggle from "./ThemeToggle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Hooks Dark Mode Starter
        </p>
        <ThemeToggle />
      </header>
    </div>
  );
}

export default App;
