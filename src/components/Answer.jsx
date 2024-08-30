import React from "react";
import { useContext } from "react";
import { appContext } from "./AppContext";
import questions from "../questions";
import "./styles.css";

function Answer({ currentQuestion }) { // useContext is used to get the state in the appContext
  const {
    counter,
    setCounter,
    setTimer,
    correctCounter,
    setCorrectCounter,
    chosenAnswers,
    setChosenAnswers,
    answeredCount,
    setAnsweredCount,
  } = useContext(appContext);

  function handleClick(index) {// Function to be run when an option is clicked
    const answer = document.querySelector(".answer-container");

    if (currentQuestion.options[index] == currentQuestion.answer) { // If the selected answer is correct
      chosenAnswers.push({
        id: questions.indexOf(currentQuestion) + 1,
        chosenAnswer: currentQuestion.options[index],
        isCorrect: true,
      });
      setChosenAnswers([...chosenAnswers]);
      setCorrectCounter(correctCounter + 1);
    } 
    
    else {    // If the selected answer is wrong
      chosenAnswers.push({
        id: questions.indexOf(currentQuestion) + 1,
        chosenAnswer: currentQuestion.options[index],
        isCorrect: false,
      });
      setChosenAnswers([...chosenAnswers]);
    }
    setAnsweredCount(answeredCount + 1);
    setCounter(counter + 1);
    setTimer(30);
    answer.style.visibility = "hidden";
  }

  return (
    <div className="answer-container">  {/* A button is created for each option */}
      {currentQuestion.options.map((option, index) => (
        <button
          className="option"
          key={index}
          onClick={() => handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Answer;