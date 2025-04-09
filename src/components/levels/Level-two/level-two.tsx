import { HomeIcon } from "@/assets";
import { Button } from "@/components/common/button.component";

export const LevelTwo = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="flex items-center flex-col text-center p-6">
      <h2 className="text-2xl font-bold mb-4">Level 7</h2>
      <p className="text-6xl text-white mb-7">soon........</p>

      <Button
        text="Back to Home"
        className="!max-w-[220px] !rounded-[50px] gap-2"
        startIcon={<HomeIcon />}
        onClick={onComplete}
      />
    </div>
  );
};
