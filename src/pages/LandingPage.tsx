import { CoursesSection } from "@/components/landing-page/courses-section";
import { DigitalLearning } from "@/components/landing-page/digital-learning-section";
import { FutureLeadersSection } from "@/components/landing-page/future-leaders-section";
import { IntroductionSection } from "@/components/landing-page/IntroductionSection";
import { LearnSmarter } from "@/components/landing-page/learn-Smarter-section";
import { SmartLearningSection } from "@/components/landing-page/smart-learning-section";
import { useUser } from "@/hooks/user.hooks";
import Dashboard from "./Dashboard";
import HomeChild from "./HomeChild";
import { RealLearning } from "@/assets";
import { useState } from "react";
import SectionThree from "@/components/common/section-three";
import SectionTracksInCommen from "@/components/common/section-tracks";

const LandingPage = () => {
  const { user } = useUser();
  const [track, setTrack] = useState<number | undefined | string>();

  return user?.userType == "parent" ? (
    <Dashboard />
  ) : user?.userType == "child" ? (
    <HomeChild />
  ) : (
    <div className="flex flex-col bg-white">
      <section className="bg-[url('/welcome-section-background.png')] bg-no-repeat  bg-cover bg-bottom w-full h-full">
        <IntroductionSection />
      </section>
      <section className=" bg-no-repeat  bg-[length:100%_100%]  bg-center w-full h-full relative">
        <DigitalLearning />
        <RealLearning className="absolute right-0 top-0" />
      </section>
      <section>
        <div className=" min-h-[526px] h-full flex flex-col justify-center items-center w-full">
          <div className="w-full">
            <h3 className="text-white font-bold !text-start w-full text-3xl">
              Tracks
            </h3>
          </div>
          <SectionTracksInCommen
            track={track}
            changeTrack={(value) => setTrack(value)}
          />
        </div>
      </section>
      <section className="bg-[url('/courses-section-background.png')] bg-no-repeat  bg-cover bg-top w-full h-full">
        <CoursesSection />
      </section>
      <section className="bg-[url('/SmartLearningBg.png')] bg-no-repeat  bg-cover bg-center w-full h-full">
        <SmartLearningSection />
      </section>
      <section className="w-full h-full">
        <FutureLeadersSection />
      </section>
      <section className="w-full min-h-screen mt-48 bg-[url('/LearnSmarter-bg.png')] bg-no-repeat   bg-[length:100%_100%] bg-center">
        <LearnSmarter />
      </section>
      <section className=" flex flex-col justify-center items-center min-h-screen">
        <div>
          <p className="font-bold text-4xl text-[#001D1D] mt-10">
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
        <div className="w-full mb-9">
          <img
            src={"/LearnSmarter-img.png"}
            className="w-full h-full rounded-lg object-cover"
          />{" "}
        </div>
      </section>
      <section className=" ">
        <SectionThree
          title="With one simple step, you can help your child grow, learn, and build a future to be proud of. Believe in them — and get started today!"
          title_button="Start Now"
        />
      </section>
    </div>
  );
};

export default LandingPage;
