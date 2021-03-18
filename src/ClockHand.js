import React, { useState, useEffect } from "react";

export default function ClockHand() {
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

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div
        className="w-3/4 h-1 flex items-stretch rounded-full overflow-hidden"
        style={{
          transform: `rotate(${time * 360 + 90}deg)`,
        }}
      >
        <div className="bg-red-500 w-1/2" />
        <div className="bg-white opacity-10 w-8" />
      </div>
    </div>
  );
}
