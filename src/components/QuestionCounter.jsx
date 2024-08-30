import { useContext } from 'react';
import { appContext } from './AppContext'
import questions from "../questions";
import "./styles.css";

const QuestionCounter = () => {// Get the counter value in appContext
    let {counter} = useContext(appContext);
  
  return ( // Current number of questions and total number of questions
    <h3 className=''>
   <span > {counter}</span>
   <span>/{questions.length}</span>
   
    </h3>
  )
}

export default QuestionCounter;