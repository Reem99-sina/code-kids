import React from "react";

interface LevelCompleteProps {
  onNextLevel: () => void;
  onGoHome: () => void;
}

export const LevelComplete: React.FC<LevelCompleteProps> = ({
  onNextLevel,
  onGoHome,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-2xl font-bold ">Congratulations! 🎉</h2>
      <p className="text-gray-700 mt-2">
        You have successfully completed this level.
      </p>
      <div className="mt-4 flex gap-4">
        <button
          onClick={onNextLevel}
          className="px-4 py-2 bg-[#FCD90D] text-black rounded-lg  transition"
        >
          Next Level
        </button>
        <button
          onClick={onGoHome}
          className="px-4 py-2 bg-[#FCD90D] text-black rounded-lg  transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};
