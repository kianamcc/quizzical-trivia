import React from "react";
import "./StartScreen.css";

const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <h1 className="start-title">Quizzical</h1>
      <p className="start-description">Some description if needed</p>
      <button className="start-btn" onClick={props.handleStartBtnClick}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
