import React from "react";
import { useContext } from "react";
import { appContext } from "./AppContext";
import "./styles.css";
function FinishScreen() {
  const { correctCounter, chosenAnswers, answeredCount } =
    useContext(appContext);

  return (
  
    <div className="result-container"> 
      <div className="score-container"> 
        {/* Shows the number of correct, incorrect and unanswered questions */}
        <div className="results">
          <h2 className="score-header">Results</h2>
          <p className="result">True number: {correctCounter}</p>
          <p className="result">
            Wrong number: {answeredCount - correctCounter}
          </p>
          <p className="result">Empty number: {10 - answeredCount}</p>
        </div>
        {/* Shows total score */}
        <div className="score">
          <h2 className="score-header">Score:</h2>
          <p className="total">{correctCounter} </p>
        
        </div>
      </div>

      {/* Creates a list of answers given by the user. */}
      <div>
        <h2 className="answers">Answers</h2>
        <ul className="result-list">
          {chosenAnswers.map((answer) => {
            return (
              <li
                key={answer.id}
                className={answer.isCorrect ? "correct-answer" : "wrong-answer"}
              >
                Question {answer.id}: {answer.chosenAnswer}
              </li>
              
            );
          })}
          
        </ul>
      </div>
    </div>
  );
}

export default FinishScreen;