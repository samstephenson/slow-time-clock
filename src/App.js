import React from "react";
import ClockHand from "./ClockHand";
import "./App.css";

function App() {
  const clockNumbers = [];
  for (var i = 1; i < 25; i++) {
    clockNumbers.push(
      <div
        key={i}
        className="absolute inset-2 text-center text-white opacity-50 font-mono"
        style={{
          transform: `rotate(${15 * i}deg)`,
        }}
      >
        {i}
      </div>
    );
  }
  const markers = [];
  for (var j = 0; j < 48; j++) {
    markers.push(
      <div
        key={j}
        className="absolute inset-0 flex justify-center"
        style={{
          transform: `rotate(${7.5 * j}deg)`,
        }}
      >
        <div
          className={`w-0.5 ${j % 2 === 0 ? "h-1" : "h-2"} bg-white opacity-10`}
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
        <ClockHand />
        {clockNumbers}
        {markers}
      </div>
    </div>
  );
}

export default App;
