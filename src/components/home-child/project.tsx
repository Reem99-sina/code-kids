import { Avater, Course, RewardToProjcet } from "@/assets";

const Project = () => {
  return (
    <div className="rounded-[20px] border-[#F15121] border-2 flex items-start gap-4 relative w-[40%]">
      <RewardToProjcet className="absolute -right-[5%] -top-[10%]" />
      <img src="/project.png" className="w-[203px] h-full" />
      <div className="py-4 flex flex-col gap-3">
        <div className="flex items-center gap-4 text-black">
          <Avater className="w-16 h-16" />
          <div className="flex flex-col gap-1 font-bold">
            <h3 className="text-lg ">kareem</h3>
            <p className="text-[#828282] text-sm font-normal">9 years old</p>
          </div>
        </div>
        <p className="text-[#6B6B6B] text-lg text-start">
          Assemble the circuit using an LED and a 9V battery.
        </p>
        <div className="text-gray-600 text-sm text-start">
          <div className="flex items-center gap-1">
            <Course />
            <p>Course :</p>
          </div>
          <ul className="list-disc text-xs font-bold">
            <li>Intro to Coding, Lesson (1) </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
