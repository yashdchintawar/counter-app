import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCounter = (action) => {
    if (action === "increase") {
      setCount((prevCount) => prevCount + 1);
    } else if (action === "decrease") {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    } else {
      setCount(0);
    }
  };

  return (
    <div className="counter-app">
      <h1>COUNTER APP</h1>
      <h2>{count}</h2>
      <div className="counter-div">
        <button
          className="counter-btn"
          onClick={() => handleCounter("increase")}
        >
          +
        </button>
        <button
          className="counter-btn"
          onClick={() => handleCounter("decrease")}
        >
          -
        </button>
        <button className="counter-btn" onClick={() => handleCounter()}>
          0
        </button>
      </div>
    </div>
  );
}

export default App;
