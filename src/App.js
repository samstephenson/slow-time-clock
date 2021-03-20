import React, { useState, useEffect } from "react";
import ClockHand from "./ClockHand";
import ClockMarkers from "./ClockMarkers";
import ClockNumbers from "./ClockNumbers";
import "./App.css";

function App() {
  const [time, setTime] = useState(Date.now());

  const dayFraction = () => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // ms difference
    return Math.round(diff / 1000) / 86400; // make seconds
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(dayFraction(), 1000));
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [timeRounded, setTimeRounded] = useState(0);
  useEffect(() => {
    setTimeRounded(Math.round(time * 24));
  }, [time]);

  const sleepTime = 21;
  const wakeTime = 7;
  const blurAmount = 1.5;
  const getAngleFromHour = (time) => (time / 24) * 360;

  const clockFaceGradient = `conic-gradient(from 0turn at 50% 50%, #000, 
      ${getAngleFromHour(
        wakeTime - blurAmount
      )}deg, #1e1e1e, ${getAngleFromHour(
    wakeTime + blurAmount
  )}deg, #1e1e1e, ${getAngleFromHour(
    sleepTime - blurAmount
  )}deg, #000, ${getAngleFromHour(sleepTime + blurAmount)}deg, #000)`;

  return (
    <div className="h-screen flex items-center w-screen justify-center">
      <div
        className="relative w-96 h-96 rounded-full"
        style={{
          background: clockFaceGradient,
        }}
      >
        <ClockHand time={time} />
        <ClockNumbers timeRounded={timeRounded} />
        <ClockMarkers timeRounded={timeRounded} />
      </div>
      {
        // <nav>
        //   <a href="#">Analog</a>
        //   <a href="#">Progress</a>
        // </nav>
      }
    </div>
  );
}

export default App;
