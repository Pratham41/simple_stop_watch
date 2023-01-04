import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [startClicked, setStartClicked] = useState(false);
  const [time, setTime] = useState(0);

  const startButtonClickHandler = () => {
    setStartClicked(!startClicked);
  };

  const resetButtonClickHandler = () => {
    setTime(0);
  };

  useEffect(() => {
    let interval = null;

    if (startClicked) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startClicked]);

  return (
    <div className="App">
      <h1>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h1>
      <button style={{ backgroundColor: `${startClicked ? 'red' : 'green'}` }} onClick={startButtonClickHandler}>
        {startClicked ? "Pause" : "Start"}
      </button>
      <button style={{ backgroundColor: 'yellow' }} onClick={resetButtonClickHandler}>Reset</button>
    </div>
  );
}

export default App;
