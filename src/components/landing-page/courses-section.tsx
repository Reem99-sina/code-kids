import Slider, { Settings } from "react-slick";

import { NextArrow, PrevArrow } from "../common/slider-arrow";
import RecommededCourse from "../home-parent/recommeded-course";
import { courses } from "../home-parent/section-three";

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

export const CoursesSection = () => {
  return (
    <div className="w-full h-screen items-end mt-24  container mx-auto">
      <div className="flex items-center justify-between p-10">
        <span className="text-4xl font-bold text-[#001D1D]">Courses</span>
        <span className="text-2xl font-bold text-[#626262] cursor-pointer">
          See all
        </span>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex gap-4 max-w-full justify-start">
          <Slider {...settings} className="max-w-full">
            {courses?.map((ele) => (
              <RecommededCourse key={ele?.title} {...ele} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
