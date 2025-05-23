import ContentFooter from "@/components/footer/ContentFooter";
import { CoursesSection } from "@/components/landing-page/courses-section";
import { DigitalLearning } from "@/components/landing-page/digital-learning-section";
import { FutureLeadersSection } from "@/components/landing-page/future-leaders-section";
import { IntroductionSection } from "@/components/landing-page/IntroductionSection";
import { LearnSmarter } from "@/components/landing-page/learn-Smarter-section";
import { SmartLearningSection } from "@/components/landing-page/smart-learning-section";
import { StartTheirJourney } from "@/components/landing-page/start-their-journey-section";
import { useUser } from "@/hooks/user.hooks";
import Dashboard from "./Dashboard";
import HomeChild from "./HomeChild";

const LandingPage = () => {
  const { user } = useUser();

  return user?.userType == "parent" ? (
    <Dashboard />
  ) : user?.userType == "child" ? (
    <HomeChild />
  ) : (
    <div className="flex flex-col bg-white">
      <section className="bg-[url('/welcome-section-background.png')] bg-no-repeat  bg-cover bg-bottom w-full h-full">
        <IntroductionSection />
      </section>
      <section className="bg-[url('/categories-background.png')] bg-no-repeat   bg-[length:100%_100%]  bg-center w-full h-full">
        <DigitalLearning />
      </section>
      <section className="bg-[url('/courses-section-background.png')] bg-no-repeat  bg-cover bg-center w-full h-full">
        <CoursesSection />
      </section>
      <section className="bg-[url('/SmartLearningBg.png')] bg-no-repeat  bg-cover bg-center w-full h-full">
        <SmartLearningSection />
      </section>
      <section className="w-full h-full">
        <FutureLeadersSection />
      </section>
      <section className="w-full h-screen mt-48 bg-[url('/LearnSmarter-bg.png')] bg-no-repeat   bg-[length:100%_100%] bg-center">
        <LearnSmarter />
      </section>
      <section className="w-full min-h-screen mt-48 relative bg-[url('/Start-Their-Journey-bg.png')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 pointer-events-none">
          <StartTheirJourney />
        </div>
      </section>
      <ContentFooter />
    </div>
  );
};

export default LandingPage;
