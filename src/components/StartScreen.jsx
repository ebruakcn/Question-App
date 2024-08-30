import { useContext } from "react";
import { appContext } from "./AppContext";
import "./styles.css";

function StartScreen() {
  const { setIsAppVisible } = useContext(appContext);

  function buttonClicked() {
    setIsAppVisible((prev) => !prev);
  }

  // Display a welcome message and instructions
  return (
    <div className="start">
     
      <p className="start-info">
      <h2>Hoş Geldiniz!</h2>
     Test 10 sorudan oluşmaktadır. Her soruya 30 saniye süreniz var.
      </p>
       <button onClick={buttonClicked} id="start">
        Teste Başla
      </button>
    </div>
  );
}

export default StartScreen;