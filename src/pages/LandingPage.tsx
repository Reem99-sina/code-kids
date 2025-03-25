import { CoursesSection } from "@/components/landing-page/courses-section";
import { DigitalLearning } from "@/components/landing-page/digital-learning-section";
import { IntroductionSection } from "@/components/landing-page/IntroductionSection";

const LandingPage = () => {
  return (
    <>
      <section className="bg-[url('/welcome-section-background.png')] bg-no-repeat  bg-cover bg-bottom w-full h-full">
        <IntroductionSection />
      </section>
      <section className="bg-[url('/categories-background.png')] bg-no-repeat   bg-[length:100%_100%]  bg-center w-full h-full">
        <DigitalLearning />
      </section>
      <section className="bg-[url('/courses-section-background.png')] bg-no-repeat  bg-cover bg-center w-full h-full">
        <CoursesSection />
      </section>
    </>
  );
};

export default LandingPage;
