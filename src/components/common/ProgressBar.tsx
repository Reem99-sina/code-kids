import { SmallWinnerIcon, WinnerIcon } from "@/assets";
import React from "react";

interface ProgressBarProps {
  progress: number;
  color?: string;
  isInCart?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = "bg-#FF1D92",
  isInCart,
}) => {
  return (
    <div className="w-full">
      {!isInCart && (
        <span className="text-[#008B9F] font-bold text-xl ">
          {progress}/100
        </span>
      )}
      <div
        className={`w-full  rounded-full relative mt-4 ${
          !isInCart ? "h-4 bg-[#FFE5F3]" : "h-[8px] bg-[#E4FFF4]"
        }`}
      >
        <div
          className={`h-full ${color} bg-[#FF1D92] rounded-full transition-all duration-300`}
          style={{ width: `${progress}%`, backgroundColor: color }}
        />
        {!isInCart ? (
          <div
            className="absolute flex items-center justify-center -right-5 top-1/2 transform -translate-y-1/2 h-14 w-14 text-white text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: progress === 100 ? color : "#FFE5F3" }}
          >
            <span>
              <WinnerIcon />
            </span>
          </div>
        ) : (
          <div
            className="absolute flex items-center justify-center -right-1 top-1/2 transform -translate-y-1/2 h-[20px] w-[20px] text-white text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: progress === 100 ? color : "#E4FFF4" }}
          >
            <span>
              <SmallWinnerIcon />
            </span>
          </div>
        )}

        {isInCart && (
          <span className="text-white w-full font-normal text-[6px] mt-1 flex">
            {progress}%
          </span>
        )}
      </div>
    </div>
  );
};
export default ProgressBar;
