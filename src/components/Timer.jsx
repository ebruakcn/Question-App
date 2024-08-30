import { useContext } from "react"
import {appContext} from "./AppContext"
import "./styles.css"

const Timer = () => {
  const {timer, setTimer} = useContext(appContext);

  // Displays the timer on the screen
  return (
    <h3 className="timer">Time: {timer}</h3>
  )
}

export default Timer