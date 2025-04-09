import { CoursesCard } from "../cards/courses-card";

export const CoursesSection = () => {
  return (
    <div className="w-full h-screen items-end mt-9 ">
      <div className="flex items-center justify-between p-10">
        <span className="text-4xl font-bold text-[#001D1D]">Courses</span>
        <span className="text-2xl font-bold text-[#626262] cursor-pointer">
          See all
        </span>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center gap-4 w-[70%]">
          <CoursesCard
            image="/friends-bg.png"
            title="Teen Skills & Chill Homeroom"
            rating={4.8}
            reviews={441}
            price={1500}
            oldPrice={1500}
            ageRange="8-10"
            duration="30"
          />
          <CoursesCard
            image="/draw-bg.png"
            title="Learn How to Draw Fantasy W/Vam..."
            rating={4.8}
            reviews={441}
            price={1500}
            oldPrice={1500}
            ageRange="8-10"
            duration="30"
          />
          <CoursesCard
            image="/ai-bg.png"
            title="Introduction to AI and Machine Lea..."
            rating={4.8}
            reviews={441}
            price={1500}
            oldPrice={1500}
            ageRange="8-10"
            duration="30"
          />
          <CoursesCard
            image="/python-bg.png"
            title="Python Programming | Beginner..."
            rating={4.8}
            reviews={441}
            price={1500}
            oldPrice={1500}
            ageRange="8-10"
            duration="30"
          />
        </div>
      </div>
    </div>
  );
};
