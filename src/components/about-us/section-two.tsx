import {
  CircleWavyCheck,
  GoogleAbout,
  Lenovo,
  Lexmark,
  Microsoft,
  Netflix,
  Notebook,
  Slack,
  StackFiles,
  Users,
  Verizon,
  Youtube,
} from "@/assets";
import clsx from "clsx";

const aboutusNumber = [
  {
    num: "67.1k",
    title: "Students",
    icon: <Users />,
  },
  {
    num: "26k",
    title: "Certified Instructor",
    icon: <Notebook />,
  },
  {
    num: "99.9%",
    title: "Success Rate",
    icon: <CircleWavyCheck />,
  },
  {
    num: "57",
    title: "Trusted Partners",
    icon: <StackFiles />,
  },
];

const SectionTwo = () => {
  return (
    <div className=" flex flex-col gap-20">
      <div className="flex items-center gap-20">
        <div className="flex flex-col gap-5 justify-start items-start flex-[0.5] text-start">
          <h3 className="text-[#1D2026] font-bold text-3xl">
            We Just keep growing with 6.3k partners
          </h3>
          <p className="text-descText">
            Nullam egestas tellus at enim ornare tristique. Class aptent taciti
            sociosqu ad litora torquent
          </p>
        </div>
        <div className=" flex items-center gap-6 flex-wrap flex-1">
          <div className="px-8 shadow-[0_0_32px_rgba(9,26,68,0.07)]">
            <Netflix />
          </div>
          <div className="px-8 shadow-[0_0_32px_rgba(9,26,68,0.07)]">
            <Youtube />
          </div>
          <div className="px-8 shadow-[0_0_32px_rgba(9,26,68,0.07)]">
            <GoogleAbout />
          </div>
          <div className="px-8 shadow-[0_0_32px_rgba(9,26,68,0.07)]">
            <Lenovo />
          </div>
          <div className="px-8 shadow-[0_0_32px_rgba(9,26,68,0.07)]">
            <Slack />
          </div>
          <div className="px-8 shadow-[0_0_32px_rgba(9,26,68,0.07)]">
            <Verizon />
          </div>
          <div className="px-8 shadow-[0_0_32px_rgba(9,26,68,0.07)]">
            <Lexmark />
          </div>
          <div className="px-8 shadow-[0_0_32px_rgba(9,26,68,0.07)]">
            <Microsoft />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between">
        {aboutusNumber?.map((ele) => (
          <div className="flex items-start gap-7" key={ele?.num}>
            {ele?.icon}
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-bold">{ele?.num}</h3>
              <p className="text-xs text-gray-700">{ele?.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-4 mb-8">
        <MissVisionComponent
          title="Our Mission"
          desc=" Our mission is to spark curiosity, creativity, and confidence in
            kids through a fun and gamified learning experience. We believe that
            every child deserves to learn in a way that inspires them to grow,
            explore, and dream big."
        />

        <MissVisionComponent
          title="Our Vision"
          desc=" Our mission is to spark curiosity, creativity, and confidence in
            kids through a fun and gamified learning experience. We believe that
            every child deserves to learn in a way that inspires them to grow,
            explore, and dream big."
        />
      </div>
    </div>
  );
};

export default SectionTwo;

const MissVisionComponent = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <div
      className={clsx(
        "bg-cover  min-h-[400px] p-10 flex flex-col gap-2 text-start rounded-3xl",
        title.includes("Mission")
          ? "bg-[url('@/assets/our-miss.png')]"
          : "bg-[url('@/assets/our-vision.png')]"
      )}
    >
      <h3 className="font-bold text-4xl">{title}</h3>
      <p className="text-[#363636] text-lg">{desc}</p>
    </div>
  );
};
