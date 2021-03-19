import React from "react";

export default function Numbers(props) {
  const clockNumbers = [];
  const timeRounded = props.timeRounded;

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
        className={`clock-number absolute inset-6 text-center text-white  font-mono ${clockColoring(
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
  return clockNumbers;
}
