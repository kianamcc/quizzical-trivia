import React from "react";
import "./StartScreen.css";

const StartScreen = () => {
  return (
    <div className="start-screen">
      <h1 className="start-title">Quizzical</h1>
      <p className="start-description">Some description if needed</p>
      <button className="start-btn">Start Quiz</button>
    </div>
  );
};

export default StartScreen;
