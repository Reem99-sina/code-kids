import { ArrowRotate, TrackStar } from "@/assets";
import { Button } from "../common/button.component";
import ProgressBar from "../common/ProgressBar";
import RewardBadgeStar from "../common/reward-badge-star";

const CardTrack = () => {
  return (
    <div className="text-start border-t-4 border-b-[1px] border-x-[1px] border-pinkFour rounded-lg px-4 py-7 bg-white min-w-[346px] flex flex-col gap-2">
      <h3 className="text-2xl font-bold">Coding</h3>
      <p className="text-base text-[#4E4E4E]">Come on, build your skills 💪</p>
      <div className="flex items-center">
        <div className="flex flex-col gap-2">
          <RewardBadgeStar badges={4} stars={4} />
          <ProgressBar progress={35} isInCart color="#A91DFF" />
          <p className="text-base text-[#4E4E4E]">35%</p>
          <Button
            className="!bg-transparent !text-black !justify-start !p-0 !w-auto"
            text="Continue to learn"
            endIcon={<ArrowRotate />}
          />
        </div>
        <TrackStar className="h-28 w-28"/>
      </div>
    </div>
  );
};

export default CardTrack;
