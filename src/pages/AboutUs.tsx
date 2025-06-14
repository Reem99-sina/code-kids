import SectionOne from "@/components/about-us/section-one";
import SectionTwo from "@/components/about-us/section-two";
import Yasser from "@/assets/yasser.png";

import Ahmed from "@/assets/ahmed.jpeg";
import photo from "@/assets/default-profile.jpg";

import SectionThree from "@/components/common/section-three";
import { FlyBoy } from "@/assets";
import SeactionThree from "@/components/about-us/seaction-three";

const AboutUs = () => {
  return (
    <div className="flex flex-col h-auto w-full bg-white">
      <SectionOne />
      <div className=" container mx-auto w-full">
        <SectionTwo />
      </div>
      <div className="flex flex-col gap-8 ">
        <h3 className="font-bold text-4xl mb-8">How it works</h3>
        <div className="bg-[url('@/assets/bg-how-work.png')] bg-cover bg-purpleSix flex gap-4  px-8 pb-16 justify-center bg-[10%_50%]">
          <HowWork
            num="1"
            desc="Choose a learning path – coding, logic, problem-solving, etc."
          />
          <HowWork num="2" desc="Watch interactive videos made just for kids" />
          <HowWork num="3" desc="Solve challenges and level up like a game" />
          <HowWork
            num="4"
            desc="Get progress reports and celebrate milestones with your child"
          />
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <h3 className="font-bold text-4xl text-start pb-9">Meet the team</h3>
        <div className="flex gap-4">
      
          <Teams
            image={photo}
            title=" Maged"
            desc="Founder"
          />
              <Teams
            image={photo}
            title="Toka"
            desc="Founder "
          />
          <Teams
            image={photo}
            title="Mohamed"
            desc="Instructor"
          />
          <Teams
            image={Yasser}
            title="Yasser"
            desc="Instructor"
          />
            <Teams
            image={Ahmed}
            title="Ahmed"
            desc="Instructor"
          />
        </div>
      </div>
      <div className="mt-28 container mx-auto  flex justify-between items-center">
        <h3 className="font-bold text-4xl text-start mb-8 px-8">
          See how we made a difference
        </h3>
        <FlyBoy />
      </div>
      <SeactionThree />

      <SectionThree
        title_button="Start Now"
        title="With one simple step, you can help your child grow, learn, and build a future to be proud of. Believe in them — and get started today!"
      />
     
    </div>
  );
};

export default AboutUs;

const HowWork = ({ num, desc }: { num: string; desc: string }) => {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col justify-center items-center font-bold gap-4 max-w-full md:max-w-[310px]">
      <div className="bg-orangeAbout px-5 py-3 rounded-full text-white">
        {num}
      </div>
      <h3 className="text-black">{desc}</h3>
    </div>
  );
};

const Teams = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className=" border rounded-2xl flex flex-col items-center justify-center gap-2">
      <img src={image} className="w-80 h-80 rounded-t-2xl object-cover" />
      <h3 className=" font-bold">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
};
