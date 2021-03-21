import React, { useState, useEffect } from "react";
import AnalogClock from "./AnalogClock";
import ProgressClock from "./ProgressClock";
import Nav from "./Nav";
import "./App.css";

function App() {
  // Calculate time

  const [time, setTime] = useState(Date.now());

  const dayFraction = () => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // ms difference
    return Math.round(diff / 1000) / 86400; // make seconds
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(dayFraction(), 1000));
    return () => clearInterval(interval);
  }, []);

  // Select Clock
  const [clockSelected, setClockSelected] = useState("");

  const selectClock = (selection) => setClockSelected(() => selection);

  useEffect(() => {
    const data = localStorage.getItem("clock-selected");
    if (data) setClockSelected(() => JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("clock-selected", JSON.stringify(clockSelected));
  }, [clockSelected]);

  const chosenClock = () => {
    switch (clockSelected) {
      case "progress":
        return <ProgressClock time={time} />;
      case "analog":
        return <AnalogClock time={time} timeRounded={Math.round(time * 24)} />;
      default:
        return <div />;
    }
  };

  return (
    <div className="h-screen flex flex-col items-center w-screen justify-center">
      {chosenClock()}
      <Nav selected={clockSelected} action={selectClock} />
    </div>
  );
}

export default App;
