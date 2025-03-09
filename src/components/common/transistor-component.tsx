const TransistorComponent = () => {
  return (
    <div className="relative flex justify-center items-center mb-2 ">
      {/* Transistor Body */}
      <div className="flex h-8 w-28 relative">
        {/* Emitter Connection */}
        <div className="absolute -left-5 top-1/2 -translate-y-1/2 flex items-center z-0">
          <div className="h-0.5 w-4 bg-black"></div>
          <div className="h-5 w-2  bg-orangeOne"></div>
          <span className="absolute -left-10 text-xs">Emitter</span>
        </div>

        {/* Collector Connection */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex items-center z-0">
          <div className="h-5 w-2  bg-orangeOne"></div>
          <div className="h-0.5 w-4 bg-black"></div>
          <span className="absolute -right-12 text-xs">Collector</span>
        </div>

        {/* N+ Region */}
        <div className="h-full w-1/3 bg-pinkOne flex items-center justify-center text-black font-bold z-10">
          n<sup>+</sup>
        </div>

        {/* P Region */}
        <div className="h-full w-1/5 bg-purpleThree flex items-center justify-center text-white font-bold z-10">
          p<sup>-</sup>
        </div>

        {/* N Region */}
        <div className="h-full w-1/3 bg-pinkOne flex items-center justify-center text-black font-bold z-10">
          n
        </div>

        {/* Base Connection */}
        <div className="absolute -bottom-10 left-[44%] -translate-x-1/2 flex flex-col items-center z-0">
          <div className="h-2 w-1  bg-brownColor"></div>

          <div className="h-4 w-0.5 bg-black"></div>
          <span className="mt-1 text-xs">Base</span>
        </div>
      </div>
    </div>
  );
};

export default TransistorComponent;
