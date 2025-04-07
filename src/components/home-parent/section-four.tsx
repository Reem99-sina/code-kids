import Slider, { Settings } from "react-slick";
import { ExploreCard, FeedCard } from "./feed-card";
import { Button } from "../common/button.component";

const defaultData = [
  {
    name: "kareem",
    age: 9,
    desc: [
      "kareem completed 'Lesson 3: Coding Blocks'",
      "kareem started 'Creative Thinking Course'",
    ],
  },
  {
    name: "Assma",
    age: 12,
    desc: ["Jana earned a new badge 'Logic Hero'"],
  },
  {
    name: "kareem",
    age: 9,
    desc: [
      "kareem completed 'Lesson 3: Coding Blocks'",
      "kareem started 'Creative Thinking Course'",
    ],
  },
];
export const defaultDataExplore = [
  {
    title: "Discover What Your Child Loves",
    desc: "Is your child more into coding, drawing, stories, or solving problems?",
    min: 2,
    type: true,
  },
  {
    title: "What Do You See in Your Child",
    desc: "A parent-only test to give us your insights and help guide recommendations.",
    min: 5,
    type: false,
  },
  {
    title: "How Does Your Child Learn Best?",
    desc: "Some kids prefer videos, others love hands-on activities. Let's find out!",
    min: 3,
    type: true,
  },
  {
    title: "Test Logical Thinking",
    desc: "A short quiz to assess your child’s reasoning and logic flow — great for coding!",
    min: 3,
    type: true,
  },
];
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
const settingsExplore: Settings = {
  ...settingsFeed,
  slidesToShow: 4,
};
const SectionFour = () => {
  return (
    <>
      <div className="bg-[url('/feed-bg.png')] bg-cover bg-no-repeat w-full  min-h-[623px] text-black">
        <div className="container mx-auto pt-12">
          <h3 className="font-bold text-4xl">Recent activity feed</h3>
          <div className="flex gap-4 max-w-full justify-start mt-8">
            <Slider {...settingsFeed} className="max-w-full">
              {defaultData?.map((ele) => <FeedCard key={ele?.name} {...ele} />)}
            </Slider>
          </div>
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
              <Slider {...settingsExplore} className="max-w-full items-stretch">
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
      <div className=" bg-white  min-h-max relative">
        <div className="bg-[url('/browser.png')] bg-cover bg-no-repeat min-h-[527px] flex flex-col items-center justify-center gap-4">
          <div className="container mx-auto  md:max-w-[841px] max-w-full">
            <h3 className="text-4xl font-black text-[#001D1D]">
              Want to boost your child’s progress? Explore new skills now!
            </h3>
          </div>
          <Button
            text="Browse Courses"
            className="!rounded-full !w-auto !px-6 !text-base !text-blackPurple"
          />
        </div>
      </div>
    </>
  );
};

export default SectionFour;
