import { Tracks } from "@/assets";
import { Checkbox } from "../ui/checkbox";
import RewardBadgeStar from "../common/reward-badge-star";
import { Button } from "../common/button.component";

const Task = () => {
  return (
    <div className="bg-white rounded-2xl pt-4 px-5 pb-9 flex flex-col gap-3 max-w-[420px]">
      <div className="text-sm text-[#5F5F5F] flex items-center gap-2">
        <Tracks />
        <p>
          Track :{" "}
          <span className="text-[#5F5F5F] font-bold">
            {" "}
            Coding, Intero to coding
          </span>
        </p>
      </div>
      <div className=" flex items-center gap-3">
        <Checkbox className=" text-black" checked />
        <p className="text-sm text-[#6B6B6B]">Complete 1 lesson</p>
      </div>
      <div className=" flex items-center gap-3">
        <Checkbox className="bg-[#E9E9E9] text-black" />
        <p className="text-sm text-[#6B6B6B]">Watch a learning video </p>
      </div>
      <RewardBadgeStar badges={4} stars={4} />
      <Button text="Start Tasks" className="!rounded-full" />
    </div>
  );
};

export default Task;
