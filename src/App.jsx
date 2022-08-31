import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <div className="App">
      <StartScreen />
      <div className="blob"></div>
    </div>
  );
}

export default App;
