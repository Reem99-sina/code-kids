import { Badges, Reward, Star } from "@/assets";
import clsx from "clsx";

const RewardBadgeStar = ({
  badges,
  stars,
  isHeader,
}: {
  badges: number;
  stars: number;
  isHeader?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {!isHeader && (
        <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-1">
          <Reward />
          <p>Rewards:</p>
        </div>
      )}
      <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-1">
        <Badges />
        <p className={clsx("font-bold text-xs ", isHeader ? "text-white" : "")}>
          {badges} Badges
        </p>
      </div>
      <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-1">
        <Star />
        <p className={clsx("font-bold text-xs ", isHeader ? "text-white" : "")}>
          {stars} Stars
        </p>
      </div>
    </div>
  );
};

export default RewardBadgeStar;
