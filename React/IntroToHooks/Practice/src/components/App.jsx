import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("Time");
  const myInterval = setInterval(getTime, 1000);

  function getTime() {
    let currentTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTime(currentTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
