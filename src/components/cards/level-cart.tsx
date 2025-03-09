import { LevelBaseLight, LockIcon, WinnerIcon } from "@/assets";
import React from "react";
import ProgressBar from "../common/ProgressBar";

interface LevelCartProps {
  title: string;
  description?: string;
  levelActive?: boolean;
  progressNumber: number;
  lock?: boolean;
}

export const LevelCart: React.FC<LevelCartProps> = ({
  title,
  description,
  levelActive,
  progressNumber,
  lock,
}) => {
  return (
    <div
      className={`relative w-full min-h-[130px]   shadow-lg border-t-4  duration-300    rounded-[8px] flex min-w-[303px] md:flex-row gap-4 max-w-[314px] items-center  ${levelActive ? "hover:scale-[1.105] hover:translate-y-[4px] cursor-pointer border-t-[#FF00B8] shadow-[0px_0px_10px_2px_#FF0084] border-[#00FF75] border-r border-b border-l bg-[#0C0716]" : "cursor-not-allowed border-t-[#A2A2A2] bg-[#36323ECC]"}`}
    >
      <div className="flex flex-col p-4 gap-2">
        <div className="text-[16px] text-start text-[#FFFFFF] font-bold">
          {title}
        </div>
        <div className="text-[#E4E4E4] text-sm font-normal text-start">
          {description}
        </div>
        <div className="pb-2  w-full flex">
          <ProgressBar progress={progressNumber} isInCart color="#A91DFF" />
        </div>

        {lock && (
          <div className="flex flex-row items-center gap-2">
            <p className="text-xs font-normal text-[#E4E4E4]">Unloked </p>
            <span>
              <LockIcon />
            </span>
          </div>
        )}
      </div>
      <div className=" flex-1 flex flex-col  items-center pb-6">
        <div className="   ">
          <WinnerIcon />
        </div>
        <div className="absolute -bottom-[10px] right-[3px] ">
          <LevelBaseLight />
        </div>
      </div>
    </div>
  );
};
