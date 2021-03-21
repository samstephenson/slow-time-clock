// import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

export default function ProgressClock(props) {
  //   const canvas = useRef(null);
  //
  //   useEffect(() => {
  //     const context = canvas.current.getContext("2d");
  //     let time = 0;
  //     // Draw here
  //   });

  return (
    <div className="flex w-screen h-screen items-stretch justify-start">
      <div
        className="shadow-xl bg-gray-800"
        style={{ width: `${props.time * 100}vw` }}
      />
      {/*<canvas
        ref={canvas}
        style={{
          width: "100%",
          height: "100%",
        }}
        width={`${props.time * 100}vw`}
      />*/}
    </div>
  );
}
