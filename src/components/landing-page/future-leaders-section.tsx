import Slider, { Settings } from "react-slick";
import { LearningCard } from "../cards/learning-card";
import StudentCard from "../cards/StudentCard";
import { NextArrow, PrevArrow } from "../common/slider-arrow";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024, // Screens <= 1024px (e.g., tablets)
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // Screens <= 768px (e.g., mobile landscape)
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480, // Screens <= 480px (e.g., mobile portrait)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const students = [
  {
    name: "Ahmed Omran",
    age: 9,
    completedCourses: 5,
    learningTime: "8h 45m",
    school: "Abdellah Zoubir",
    imageSrc: "/ahmed-pic.png",
    key: 1,
  },
  {
    name: "Sara Hamed",
    age: 10,
    completedCourses: 7,
    learningTime: "12h 30m",
    school: "Al-Nour School",
    imageSrc: "/sara-pic.png",
    key: 2,
  },
  {
    name: "Omar Tarek",
    age: 8,
    completedCourses: 3,
    learningTime: "5h 15m",
    school: "Future Kids Academy",
    imageSrc: "/ahmed-pic.png",
    key: 3,
  },
  {
    name: "Laila Mostafa",
    age: 11,
    completedCourses: 6,
    learningTime: "9h 50m",
    school: "Sunrise International",
    imageSrc: "/sara-pic.png",
    key: 4,
  },
  {
    name: "Youssef Ali",
    age: 9,
    completedCourses: 4,
    learningTime: "7h 20m",
    school: "Smart Generation School",
    imageSrc: "/ahmed-pic.png",
    key: 5,
  },
];

export const FutureLeadersSection = () => {
  return (
    <div className="w-full h-screen items-end relative ">
      <div className="flex items-center justify-between px-10">
        <span className="text-4xl font-bold text-[#001D1D]">
          Future leaders
        </span>
        <span className="text-2xl font-bold text-[#626262] cursor-pointer">
          See all
        </span>
      </div>
      <div className="items-center justify-center flex gap-4 mt-8    container mx-auto">
        <div className="flex gap-4 max-w-full justify-start">
          <Slider {...settings} className="max-w-full">
            {students?.map((ele) => <StudentCard {...ele} key={ele?.key}/>)}
          </Slider>
        </div>
      </div>
      <div className="absolute bg-[url('/future-leaders.png')] b  bottom-1  z-[-1] bg-cover w-full  h-[500px]"></div>
      <div className="items-center  flex gap-4 my-10    w-full">
        <div className="flex gap-7 flex-col px-5 py-3 w-full">
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
