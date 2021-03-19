export default function Markers(props) {
  const markers = [];
  const timeRounded = props.timeRounded;

  const clockColoring = (i) => {
    if (i === timeRounded) {
      return "opacity-100";
    } else if (i >= timeRounded - 1 && i <= timeRounded + 1) {
      return "opacity-90";
    } else if (i >= timeRounded - 2 && i <= timeRounded + 2) {
      return "opacity-80";
    } else if (i >= timeRounded - 3 && i <= timeRounded + 3) {
      return "opacity-70";
    } else {
      return "opacity-60";
    }
  };

  for (var j = 0; j < 48; j++) {
    markers.push(
      <div
        key={j}
        className="absolute inset-2 flex justify-center"
        style={{
          transform: `rotate(${7.5 * j}deg)`,
        }}
      >
        <div
          className={`w-0.5 ${
            j % 2 === 0 ? "h-1" : "h-2"
          } bg-white ${clockColoring(j / 2)} rounded-full`}
        />
      </div>
    );
  }
  return markers;
}
