import React, { useState, useEffect } from "react";
import ClockHand from "./ClockHand";
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

  const clockNumbers = [];

  const clockColoring = (i) => {
    if (i === timeRounded) {
      return "opacity-100";
    } else if (i === timeRounded - 1 || i === timeRounded + 1) {
      return "opacity-90";
    } else if (i === timeRounded - 2 || i === timeRounded + 2) {
      return "opacity-80";
    } else if (i === timeRounded - 3 || i === timeRounded + 3) {
      return "opacity-70";
    } else {
      return "opacity-60";
    }
  };

  for (var i = 1; i < 25; i++) {
    clockNumbers.push(
      <div
        key={i}
        className={`clock-number absolute inset-2 text-center text-white  font-mono ${clockColoring(
          i
        )}`}
        style={{
          transform: `rotate(${15 * i}deg)`,
        }}
      >
        <span
          className="block"
          style={{
            transform: `rotate(${-15 * i}deg)`,
          }}
        >
          {i}
        </span>
      </div>
    );
  }
  const markers = [];
  for (var j = 0; j < 48; j++) {
    markers.push(
      <div
        key={j}
        className="absolute -inset-3 flex justify-center"
        style={{
          transform: `rotate(${7.5 * j}deg)`,
        }}
      >
        <div
          className={`w-0.5 ${j % 2 === 0 ? "h-1" : "h-2"} bg-white opacity-50`}
        />
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center w-screen justify-center">
      <div
        className="relative w-96 h-96 rounded-full"
        style={
          {
            /*
          background:
            "conic-gradient(from 0turn at 50% 50%, #000, 70deg, #1e1e1e, 120deg, #1e1e1e, 250deg, #000, 300deg, #000)",
        */
          }
        }
      >
        <ClockHand time={time} />
        {clockNumbers}
        {markers}
      </div>
    </div>
  );
}

export default App;
