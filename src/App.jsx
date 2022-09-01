import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import { nanoid } from "nanoid";

function App() {
  const [startBtnClicked, setStartBtnClicked] = useState(false);
  const [questions, setQuestions] = useState([]);

  const generateQuestions = questions.map((item) => {
    return <Quiz item={item} key={nanoid()} />;
  });

  const handleStartBtnClick = () => {
    setStartBtnClicked(true);
  };

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&encode=url3986")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .catch((err) => console.log(err));
  }, []);

  {
    console.log(questions);
  }

  return (
    <div className="App">
      {!startBtnClicked ? (
        <StartScreen handleStartBtnClick={handleStartBtnClick} />
      ) : (
        generateQuestions
      )}
    </div>
  );
}

export default App;
