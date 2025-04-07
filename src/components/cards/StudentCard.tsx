import React from "react";

interface StudentCardProps {
  name: string;
  age: number;
  completedCourses: number;
  learningTime: string;
  school: string;
  imageSrc: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
  name,
  age,
  completedCourses,
  learningTime,
  school,
  imageSrc,
}) => {
  return (
    <div className="relative w-72 bg-[#2438E5] p-4 rounded-lg shadow-lg transform -skew-y-6  border-[7px] border-[#FB8ED4]">
      <div className="relative bg-[#F7E337] p-4  skew-y-12 mt-5 ">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-40 object-cover -skew-y-[10deg] p-4 "
        />
      </div>
      <div className="bottom-0 left-4 bg-white border-[#080808] border p-5 -skew-y-12 text-start mb-4">
        <h3 className="text-lg font-bold skew-y-[15deg] mt-2">{name}</h3>
        <p className="text-gray-700 skew-y-[15deg]">{age} years old</p>
        <p className="flex items-center skew-y-[15deg] text-[#5F5F5F] font-normal text-xs">
          🎓 Completed Courses & Tracks:{" "}
          <span className="text-[#5F5F5F] font-bold text-xs">
            {completedCourses}
          </span>
        </p>
        <p className="flex items-center gap-2 skew-y-[15deg]">
          🔥 Learning Time: {learningTime}
        </p>
        <p className="flex items-center gap-2 skew-y-[15deg]">
          🏫 My School is: {school}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
