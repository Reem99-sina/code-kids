import { LearningCard } from "../cards/learning-card";
import StudentCard from "../cards/StudentCard";

export const FutureLeadersSection = () => {
  return (
    <div className="w-full h-screen items-end relative ">
      <div className="flex items-center justify-between p-10">
        <span className="text-4xl font-bold text-[#001D1D]">
          Future leaders
        </span>
        <span className="text-2xl font-bold text-[#626262] cursor-pointer">
          See all
        </span>
      </div>
      <div className="items-center justify-center flex gap-4 mt-8    w-full">
        <div className="flex gap-7 ">
          <StudentCard
            name="Ahmed Omran"
            age={9}
            completedCourses={5}
            learningTime="8h 45m"
            school="Abdellah zoubir"
            imageSrc="/ahmed-pic.png"
          />
          <StudentCard
            name="Lana Mahmoud"
            age={12}
            completedCourses={5}
            learningTime="8h 45m"
            school="Abdellah zoubir"
            imageSrc="/lana-pic.png"
          />
          <StudentCard
            name="Saraa Tarek"
            age={10}
            completedCourses={5}
            learningTime="8h 45m"
            school="Abdellah zoubir"
            imageSrc="/sara-pic.png"
          />
        </div>
      </div>
      <div className="absolute bg-[url('/future-leaders.png')] b  bottom-1  z-[-1] bg-cover w-full  h-[500px]"></div>
      <div className="items-center  flex gap-4 mt-8    w-full">
        <div className="flex gap-7 flex-col p-3 w-full">
          <div className="flex w-full">
            <p className="text-[39px] text-[#001D1D] font-bold">
              Student projects in action
            </p>
          </div>
          <div className="flex flex-row justify-center w-full  gap-2">
            <LearningCard
              image="/learning-bg.png"
              name="Kareem"
              age={9}
              description="Assemble the circuit using an LED and a 9V battery."
              course="Intro to Coding"
              lesson="Lesson (1)"
              onClick={() => {}}
            />
            <LearningCard
              image="/learning-bg.png"
              name="Kareem"
              age={9}
              description="Assemble the circuit using an LED and a 9V battery."
              course="Intro to Coding"
              lesson="Lesson (1)"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
