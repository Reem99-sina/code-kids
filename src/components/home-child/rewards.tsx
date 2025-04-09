import Slider, { Settings } from "react-slick";
import CardTrack from "./card-track";
import LeaderBoard from "./leader-board";
import CardReward from "./card-reward";

const defaultData = [
  {
    desc: ["🏆 Earned the Problem Solver badge! March 12"],
  },

  {
    desc: ["🏆 Earned the Problem Solver badge! March 12"],
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

const RewardsComponent = () => {
  return (
    <div className="bg-[url('/progress-tracks.png')] bg-no-repeat bg-contain w-full min-h-[500px]  bg-white ">
      <div className="container mx-auto">
        <h2 className="text-4xl  text-start font-bold pt-32">
          Progress tracks summary
        </h2>
        <div className="mt-8 flex ">
          <CardTrack />
        </div>
        <div className="mb-8">
          <h2 className="text-4xl  text-start font-bold pt-32">Leaderboard</h2>
        </div>
        <LeaderBoard />
      </div>
      <div className="bg-[url('/feed-bg.png')] bg-cover bg-no-repeat w-full  min-h-[623px] text-black mt-16">
        <div className="container mx-auto pt-12">
          <h3 className="font-bold text-4xl">Recent rewards</h3>
          <div className="flex gap-4 max-w-full justify-start mt-8">
            <Slider {...settingsFeed} className="max-w-full">
              {defaultData?.map((ele,index) => (
                <CardReward key={index+1} {...ele} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsComponent;
