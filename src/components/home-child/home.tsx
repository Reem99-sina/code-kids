import Slider, { Settings } from "react-slick";
import { courses } from "../home-parent/section-three";
import Card from "./card";
import Project from "./project";
import Task from "./task";
import { ExploreCard } from "../home-parent/feed-card";
import { defaultDataExplore } from "../home-parent/section-four";

const settingsFeed: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
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
const HomeChildPart = () => {
  return (
    <>
      <div className="bg-[url('/courses.png')] bg-no-repeat bg-cover w-full min-h-[500px]  bg-white ">
        <div className="container mx-auto">
          <div className="flex flex-col items-start justify-start container mx-auto text-black gap-8 ">
            <div className="flex items-center justify-between font-bold mt-[14%] w-full">
              <h2 className="text-4xl  text-start">My Courses</h2>
              <p className="text-[#626262] text-2xl cursor-pointer">See all</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap ">
              {courses?.slice(0, 3)?.map((ele) => (
                <div
                  className=" bg-[url('/cart.png')] bg-no-repeat bg-cover w-[355px]"
                  key={ele?.title}
                >
                  <div className="pt-[10rem] px-[2rem] pb-[4rem]">
                    <Card key={ele?.title} {...ele} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/tasks-bg.png')] bg-no-repeat bg-cover w-full min-h-[500px] bg-white ">
        <div className="container mx-auto">
          <div className=" pt-12">
            <h3 className="font-bold text-4xl">Daily Tasks / Missions</h3>
          </div>
          <div className="mt-8">
            <Task />
          </div>
        </div>
      </div>
      <div className="bg-white py-8">
        <h3 className="font-bold text-4xl">
          These are your best projects, We are very proud of you.
        </h3>
        <div className="container mx-auto my-8">
          <Project />
        </div>
      </div>
      <div className=" bg-white min-h-[786px] relative">
        <div className="bg-[url('/main-explore.png')] bg-cover bg-no-repeat flex flex-col justify-end items-start">
          <div className="absolute bottom-0">
            <img src="/girl.png" className="w-[205px] h-[466px]" />
          </div>
          <div className="container mx-auto  relative top-28">
            <h3 className="font-bold text-4xl text-start">
              Explore skill tests for Your children
            </h3>
            <div className="flex  gap-4 mt-8 max-w-full">
              <Slider {...settingsFeed} className="max-w-full items-stretch">
                {defaultDataExplore?.map((ele) => (
                  <ExploreCard
                    key={ele?.title}
                    desc={ele?.desc}
                    title={ele?.title}
                    min={ele?.min}
                    type={ele?.type}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeChildPart;
