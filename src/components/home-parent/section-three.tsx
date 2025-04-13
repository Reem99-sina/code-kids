import Slider, { Settings } from "react-slick";
import { NextArrow, PrevArrow } from "../common/slider-arrow";
import RecommededCourse from "./recommeded-course";
import {
  // useGetRecommededCourses,
  // useGetRecommededCourses,
  useParentQuery,
} from "@/services/parent-service";

export const courses = [
  {
    title: "Teen Skills & Chill Homeroom",
    ratting: 4.8,
    num_connect: 411,
    cost: 1500,
    ages: "8 - 10",
    min: 30,
    prev_cost: 1500,
  },
  {
    title: "Learn How to Draw Fantasy W/ Vam...",
    ratting: 4.8,
    num_connect: 411,
    cost: 1500,
    ages: "8 - 10",
    min: 30,
    prev_cost: 1500,
  },
  {
    title: "Introduction to AI and Machine Lea...",
    ratting: 4.8,
    num_connect: 411,
    cost: 1500,
    ages: "8 - 10",
    min: 30,
    prev_cost: 1500,
  },
  {
    title: "Python Programming | Beginner...",
    ratting: 4.8,
    num_connect: 411,
    cost: 1500,
    ages: " 8 - 10",
    min: 30,
    prev_cost: 1500,
  },
];

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

const SectionThree = () => {
  const { data } = useParentQuery();
  // const {}=useGetRecommededCourses({id:1})

  return (
    <div className="bg-[url('/section-three.png')] bg-contain bg-no-repeat w-full h-auto  lg:-mt-40  bg-white  text-black">
      <div className="xl:mt-[400px] mt-[15rem]"></div>
      <div className="bg-[url('/bg-recommed.png')]  bg-[position:50px_400%]  bg-contain ">
        <div className="flex flex-col gap-20 mb-5">
          {data ? (
            data?.map((ele) => (
              <div
                className=" flex justify-start container mx-auto flex-col gap-7  z-10"
                key={ele?.id}
              >
                <div className="flex items-center justify-between font-bold">
                  <h2 className="text-4xl  text-start">
                    Recommended for {ele?.fullname}
                  </h2>
                  <p className="text-[#626262] text-2xl cursor-pointer">
                    See all
                  </p>
                </div>
                {/* <div className="flex gap-4 max-w-full justify-start">
                  <Slider {...settings} className="max-w-full">
                    {courses?.map((elem) => (
                      <RecommededCourse key={elem?.title} {...elem} />
                    ))}
                  </Slider>
                </div> */}
                <RecommededCourses />
              </div>
            ))
          ) : (
            <div className=" flex justify-start container mx-auto flex-col gap-7  z-10">
              <div className="flex items-center justify-between font-bold">
                <h2 className="text-4xl  text-start">Recommended for Assma</h2>
                <p className="text-[#626262] text-2xl cursor-pointer">
                  See all
                </p>
              </div>
              <div className="flex gap-4 max-w-full justify-start">
                <Slider {...settings} className="max-w-full">
                  {courses?.map((ele) => (
                    <RecommededCourse key={ele?.title} {...ele} />
                  ))}
                </Slider>
              </div>
            </div>
          )}

          <div className=" flex justify-start container mx-auto flex-col gap-7  z-10">
            <div className="flex items-center justify-between font-bold">
              <h2 className="text-4xl  text-start">Recommended for Kareem</h2>
              <p className="text-[#626262] text-2xl cursor-pointer">See all</p>
            </div>
            <div className="flex gap-4 max-w-full justify-start">
              <Slider {...settings} className="max-w-full">
                {courses?.map((ele) => (
                  <RecommededCourse key={ele?.title} {...ele} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <p className="text-[#828282]">See More Recommended...</p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

const RecommededCourses = () => {
  // const { data } = useGetRecommededCourses({ id: id });


  return (
    <div className="flex gap-4 max-w-full justify-start">
      <Slider {...settings} className="max-w-full">
        {courses?.map((elem) => (
          <RecommededCourse key={elem?.title} {...elem} />
        ))}
      </Slider>
    </div>
  );
};
