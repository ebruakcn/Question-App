import React, { useEffect, useContext } from "react";
import questions from "../questions";
import { appContext } from "./AppContext";
import "./styles.css";
import Answer from "./Answer";

function Question() {
  const { timer, setTimer, counter, setCounter } =
    useContext(appContext);

  const currentQuestion = questions[counter - 1];

  useEffect(() => {
    // Only run the effect if there are remaining questions
    if (counter <= questions.length) {
      const intervalId = setInterval(() => {
        const answer = document.querySelector(".answer-container");

        // Decrease the timer every second
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);

          // Show answers after 4 seconds
          if (timer <= 26) {
            answer.style.visibility = "visible";
          }
        } else {
          // Reset the timer and move to the next question
          setTimer(30);
          setCounter((prevCounter) => prevCounter + 1);
          answer.style.visibility = "hidden"; 
        }
      }, 1000);

    
      return () => clearInterval(intervalId);
    }
  }, [counter, timer, setTimer, setCounter]);

  return (
    <div className="question-container">
      <img src={currentQuestion.media} alt="Question Media" />
      <div className="question-border">
        <p>{currentQuestion.question}</p>
      </div>
      <Answer currentQuestion={currentQuestion} />
    </div>
  );
}

export default Question;
