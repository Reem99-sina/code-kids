import { CoursesCard } from "../cards/courses-card";

export const LearnSmarter = () => {
  return (
    <div className="w-full h-screen items-end mt-9 ">
      <div className="flex items-center justify-between p-10">
        <span className="text-4xl font-bold text-[#001D1D]">
          You're not alone — Learn with expert guides!
        </span>
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
      <div>
        <p className="font-bold text-4xl text-[#001D1D]">
          {" "}
          Schools & Partners We’re Proud Of
        </p>
      </div>
      <div>
        <p className="font-normal mt-4 text-xl text-[#3A3A3A]">
          {" "}
          We’re proud to collaborate with leading schools, educators, and
          organizations who share our mission of shaping the next
          generation.{" "}
        </p>
      </div>
      <div className="w-full">
        <img
          src={"/LearnSmarter-img.png"}
          className="w-full h-full rounded-lg object-cover"
        />{" "}
      </div>
    </div>
  );
};
