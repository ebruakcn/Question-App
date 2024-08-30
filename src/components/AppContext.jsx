import { useState, createContext } from "react";

export const appContext = createContext(null);

function AppContext({children}) { // Definition part of states
    const [counter, setCounter] = useState(1);
    const [timer, setTimer] = useState(30);
    const [isAppVisible, setIsAppVisible] = useState(false);
    const [correctCounter, setCorrectCounter] = useState(0);
    const [chosenAnswers, setChosenAnswers] = useState([]);
    const [answeredCount, setAnsweredCount] = useState(0);

    const contextData = { // The part where states are kept
        counter,
        setCounter,
        timer,
        setTimer,
        isAppVisible,
        setIsAppVisible,
        correctCounter,
        setCorrectCounter,
        chosenAnswers,
        setChosenAnswers,
        answeredCount,
        setAnsweredCount
    }

    return ( // Wrapped with a Provider that provides contextData to all child components
        <appContext.Provider value={contextData}>{children}</appContext.Provider>
    )
}

export default AppContext;