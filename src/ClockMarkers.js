export default function Markers() {
  const markers = [];
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
          } bg-white opacity-50 rounded-full`}
        />
      </div>
    );
  }
  return markers;
}
