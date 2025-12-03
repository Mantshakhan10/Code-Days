import { useState, useEffect } from "react";
import Display from "./Display";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(prev => prev + 1);
      console.log("Time updated!");
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  console.log("Timer rendered");

  return (
    <div>
      <h2>Time: {time}</h2>
      <Display value={100} />
    </div>
  );
}

export default Timer;
