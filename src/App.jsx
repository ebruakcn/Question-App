import './App.css'
import Question from './components/Question'
import QuestionCounter from './components/QuestionCounter'
import Timer from './components/Timer'


function App() {

  return (
    <div className='app-container'>
      <div className='header-container'>
        <QuestionCounter/>
        <Timer/>
      </div>
      <Question/>
    </div>
  )
}

export default App
