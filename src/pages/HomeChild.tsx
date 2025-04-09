import { ChildWelcome, Courses, Home, LineTriangular, Rewards } from "@/assets";
import { Line } from "@/components/common/line.component";
import ContentFooter from "@/components/footer/ContentFooter";
import HomeChildPart from "@/components/home-child/home";
import MyCourse from "@/components/home-child/my-course";
import RewardsComponent from "@/components/home-child/rewards";

import clsx from "clsx";
import { useState } from "react";

const HomeChild = () => {
  const [type, setType] = useState<"home" | "course" | "reward">("home");

  return (
    <div className="bg-white">
      <div className="bg-[url('/header-child-home.png')] text-white bg-center bg-cover w-full min-h-[500px] flex flex-col justify-end ">
        <div className="container mx-auto flex items-center">
          <div className="flex items-center">
            <ChildWelcome />
          </div>
          <div className="flex items-center gap-8">
            <div
              className={clsx(
                "flex flex-col gap-5 items-center justify-center py-4 px-5 cursor-pointer",
                type == "home"
                  ? "bg-[#490B82] rounded-2xl shadow-[0px_6px_20px_5px_#FF1D92] font-bold text-blueLightOne"
                  : ""
              )}
              onClick={() => setType("home")}
            >
              <Home className="" />
              <p>Home</p>
            </div>

            <Line color="#FFF" className="!w-[2px] !h-[100px]" />
            <div
              className={clsx(
                "flex flex-col gap-5 items-center justify-center py-4 px-5 cursor-pointer",
                type == "course"
                  ? "bg-[#490B82] rounded-2xl shadow-[0px_6px_20px_5px_#FF1D92] font-bold text-blueLightOne"
                  : ""
              )}
              onClick={() => setType("course")}
            >
              <Courses />
              <p>My Courses</p>
            </div>
            <Line color="#FFF" className="!w-[2px] !h-[100px]" />
            <div
              className={clsx(
                "flex flex-col gap-5 items-center justify-center py-4 px-5 cursor-pointer",
                type == "reward"
                  ? "bg-[#490B82] rounded-2xl shadow-[0px_6px_20px_5px_#FF1D92] font-bold text-blueLightOne"
                  : ""
              )}
              onClick={() => setType("reward")}
            >
              <Rewards />
              <p>Rewards</p>
            </div>
          </div>
        </div>
        <LineTriangular className="w-full" />
      </div>
      {type == "home" ? (
        <HomeChildPart />
      ) : type == "course" ? (
        <MyCourse />
      ) : type == "reward" ? (
        <RewardsComponent />
      ) : (
        <></>
      )}
      <div className=" bg-white  min-h-max relative">
        <div className="bg-[url('/browser.png')] bg-cover bg-no-repeat min-h-[527px] flex flex-col items-center justify-center gap-4">
          <div className="container mx-auto  md:max-w-[841px] max-w-full">
            <h3 className="text-4xl font-black text-[#001D1D]">
              🌟 We’re proud of you, our future hero! Every lesson you take
              brings you closer to your dreams. Keep learning, keep growing —
              the future is yours to create! 💫
            </h3>
          </div>
        </div>
      </div>
      <div>
        <ContentFooter />
      </div>
    </div>
  );
};

export default HomeChild;
