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

  const [prefs, setPrefs] = useState({
    wakeTime: 7,
    sleepTime: 21,
    clockSelected: "",
  });
  const handlePrefsChange = (e) => {
    setPrefs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(prefs);
  };

  const selectClock = (e) => {
    setPrefs((prev) => ({
      ...prev,
      clockSelected: e.target.innerText.toLowerCase(),
    }));
  };

  // Save/Retrieve user preferences from local storage. Set to analog if no clock selected
  useEffect(() => {
    const data = localStorage.getItem("user-preferences");
    if (data) {
      setPrefs(() => JSON.parse(data));
    } else {
      setPrefs((prev) => ({
        ...prev,
        clockSelected: "analog",
      }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("user-preferences", JSON.stringify(prefs));
  }, [prefs]);

  //Show/Hide preferences
  const [prefsOpen, setPrefsOpen] = useState(false);
  const togglePrefs = () => setPrefsOpen(prefsOpen ? false : true);
  const prefsHiddenClass = prefsOpen ? "" : "hidden";

  // Load clock based on selected
  const chosenClock = () => {
    switch (prefs.clockSelected) {
      case "progress":
        return <ProgressClock time={time} />;
      case "analog":
        return (
          <AnalogClock
            time={time}
            timeRounded={Math.round(time * 24)}
            wakeTime={prefs.wakeTime}
            sleepTime={prefs.sleepTime}
          />
        );
      default:
        return <div />;
    }
  };

  return (
    <div className="h-screen flex flex-col items-center w-screen justify-center">
      {chosenClock()}
      <p
        className="absolute bottom-2 left-2 text-white opacity-40"
        onClick={togglePrefs}
      >
        Preferences
      </p>
      <div
        className={
          "absolute bottom-2 p-4 left-2 width-72 bg-gray-700 h-128 text-gray-300 flex flex-col space-y-2" +
          " " +
          prefsHiddenClass
        }
      >
        <label for="wakeTime">
          <span className="mr-4">Wake time</span>
          <input
            className="w-32 p-1 px-2 bg-gray-800"
            name="wakeTime"
            id="wakeTime"
            type="number"
            onChange={handlePrefsChange}
            value={prefs.wakeTime}
          />
        </label>
        <label for="sleepTime">
          <span className="mr-4">Sleep time</span>
          <input
            className="w-32 p-1 px-2 bg-gray-800"
            name="sleepTime"
            id="sleepTime"
            type="number"
            onChange={handlePrefsChange}
            value={prefs.sleepTime}
          />
        </label>
        <div className="flex w-full space-x-2">
          <button onClick={selectClock} className="flex-auto p-2 bg-gray-800">
            Analog
          </button>
          <button onClick={selectClock} className="flex-auto p-2 bg-gray-800">
            Progress
          </button>
        </div>
        <button onClick={togglePrefs}>Done</button>
      </div>
    </div>
  );
}

export default App;
