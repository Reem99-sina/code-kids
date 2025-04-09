import React from "react";
import { Button } from "../common/button.component";
import { RocketIcon } from "@/assets";

interface LevelCompleteProps {
  onNextLevel: () => void;
  onGoHome: () => void;
  level: string;
}

export const LevelComplete: React.FC<LevelCompleteProps> = ({
  onNextLevel,
  onGoHome,
  level,
}) => {
  return (
    <div className="flex flex-col   items-center min-h-[339px]  bg-[url('/model-background.png')] bg-[length:100%_100%] bg-no-repeat bg-center  min-w-[488px] shadow-lg ">
      <div className="bg-[#FF1DCD] flex w-full items-center justify-center  rounded-t-2xl">
        <p className="text-2xl font-bold text-white">Level complete</p>
      </div>
      <div className="p-6">
        <p className="font-normal text-xl text-[#FCE7FF]">
          Level {level} complete! Ready for the next challenge?
        </p>
      </div>
      <div className="mt-4 flex gap-4">
        <Button
          text="Next Level"
          onClick={onNextLevel}
          className="px-4 py-2 bg-[#FCD90D] min-w-[188px] rounded-[50px] text-black items-center gap-2 flex-row-reverse flex transition"
          startIcon={<RocketIcon />}
        />
        <Button
          text="Go Home"
          onClick={onGoHome}
          className="px-4 py-2  text-black rounded-[50px] min-w-[188px] transition  flex-row-reverse flex gap-2"
          startIcon={<RocketIcon />}
        />
      </div>
    </div>
  );
};
