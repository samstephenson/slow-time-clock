import React from "react";

export default function Nav(props) {
  function handleClick(e) {
    props.action(e.target.innerText.toLowerCase());
    console.log(props.selected);
  }

  return (
    <nav className="absolute bottom-8 flex space-x-4 text-gray-500">
      <button onClick={handleClick}>Analog</button>
      <button onClick={handleClick}>Progress</button>
    </nav>
  );
}
