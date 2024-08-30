import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext, { appContext } from './components/AppContext.jsx'
import StartScreen from './components/StartScreen.jsx'
import questions from './questions.js'
import FinishScreen from './components/FinishScreen.jsx'



const Root = () => { //Conditionally renders all components of the application
  const {isAppVisible, counter, correctCounter} = useContext(appContext);

  const allQuestionsAnswered = counter > questions.length;

    const app = isAppVisible ? <App /> : <StartScreen />;
    return (
    <>
    
        {allQuestionsAnswered ? ( // Conditional Render section
      <FinishScreen
        totalQuestions={questions.length}
        correctAnswers={correctCounter}
      />
    ) : app}
    </>
)}

// Render the application to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <Root />
    </AppContext>
  </React.StrictMode>,
)