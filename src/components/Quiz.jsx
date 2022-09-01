import React from "react";
import "./Quiz.css";

const Quiz = (props) => {
  const decode = (str) => {
    // Trivia DB API was printing out %& syllabols so we have to decode to deciper
    return decodeURIComponent(str);
  };

  return (
    <div className="quiz-item">
      <h2 className="quiz-question">{decode(props.item.question)}</h2>

      <div className="choices">Choices</div>
      <hr />
    </div>
  );
};

export default Quiz;
