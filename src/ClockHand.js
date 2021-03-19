export default function ClockHand(props) {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div
        className="w-2/3 h-1 flex items-stretch rounded-full overflow-hidden"
        style={{
          transform: `rotate(${props.time * 360 + 90}deg)`,
        }}
      >
        <div className="bg-red-500 w-1/2" />
        <div className="bg-white opacity-10 w-8" />
      </div>
    </div>
  );
}
