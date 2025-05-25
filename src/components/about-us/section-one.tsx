import PaperComponent from "../common/paper-component";

const SectionOne = () => {
  return (
    <div className="bg-[url('@/assets/about-us-bg.png')] bg-cover h-full min-h-[726px] bg-top bg-no-repeat w-full">
      <PaperComponent
        title="Empowering kids to learn, grow, and shine!"
        desc="We help kids unlock their potential through exciting, mission-based learning adventures. Ready to start the journey"
        title_button="Start Now"
        className="min-h-[480px] p-24"
      />
    </div>
  );
};

export default SectionOne;
