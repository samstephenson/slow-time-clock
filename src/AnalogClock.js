import React from "react";
import ClockHand from "./ClockHand";
import ClockMarkers from "./ClockMarkers";
import ClockNumbers from "./ClockNumbers";

export default function AnalogClock(props) {
  const timeRounded = props.timeRounded;

  const blurAmount = 1.5;
  const getAngleFromHour = (time) => (time / 24) * 360;

  const clockFaceGradient = `conic-gradient(from 0turn at 50% 50%, #000, 
		  ${getAngleFromHour(
        props.wakeTime - blurAmount
      )}deg, #1e1e1e, ${getAngleFromHour(
    props.wakeTime + blurAmount
  )}deg, #1e1e1e, ${getAngleFromHour(
    props.sleepTime - blurAmount
  )}deg, #000, ${getAngleFromHour(props.sleepTime + blurAmount)}deg, #000)`;

  return (
    <div
      className="relative w-96 h-96 rounded-full"
      style={{
        background: clockFaceGradient,
      }}
    >
      <ClockHand time={props.time} />
      <ClockNumbers timeRounded={timeRounded} />
      <ClockMarkers timeRounded={timeRounded} />
    </div>
  );
}
