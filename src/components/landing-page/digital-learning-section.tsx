import { FamilyIcon, ShieldIcon, SleepyFaceIcon } from "@/assets";

export const DigitalLearning = () => {
  return (
    <div className="w-full h-screen items-end mt-9 ">
      <p className="font-bold text-4xl text-[#001D1D]">
        Is your child spending screen time without real <br />
        learning?
      </p>
      <div className="mt-9 flex flex-row gap-[117px] items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <ShieldIcon />
          <p className="text-xl font-bold text-[#010C19]">
            Difficult to find safe,
            <br /> valuable content
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <SleepyFaceIcon />
          <p className="text-xl font-bold text-[#010C19]">
            Traditional education is
            <br /> boring for many kids
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <FamilyIcon />
          <p className="text-xl font-bold text-[#010C19]">
            Parents don’t always have
            <br /> time to follow up
          </p>
        </div>
      </div>
    </div>
  );
};
