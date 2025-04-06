import { AvaterIcon } from "@/assets";
import React from "react";

interface LearningCardProps {
  image: string;
  name: string;
  age: number;
  description: string;
  course: string;
  lesson: string;
  onClick: () => void;
}

export const LearningCard: React.FC<LearningCardProps> = ({
  image,
  name,
  age,
  description,
  course,
  lesson,
  onClick,
}) => {
  return (
    <div className="flex bg-white shadow-lg rounded-xl p-4 max-w-md">
      <img
        src={image}
        alt={name}
        className="w-32 h-full rounded-lg object-cover"
      />

      <div className="ml-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2">
            <AvaterIcon />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">{age} years old</p>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-sm my-2">{description}</p>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold">📖 Course:</span> {course}, {lesson}
        </p>

        <button
          onClick={onClick}
          className="mt-2 bg-[#FCD90D] text-black font-bold py-2 px-4 rounded-[50px] shadow-md max-w-[186px] hover:bg-yellow-600"
        >
          Explore Our Tracks
        </button>
      </div>
    </div>
  );
};
