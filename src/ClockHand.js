export default function ClockHand(props) {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div
        className="w-2/3 h-1 flex items-stretch rounded-full overflow-hidden"
        style={{
          transform: `rotate(${props.time * 360 + 90}deg)`,
        }}
      >
        <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 w-1/2 rounded-full" />
        <div className="bg-black w-8" />
      </div>
    </div>
  );
}
