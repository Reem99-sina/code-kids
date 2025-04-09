import { Avater, Star } from "@/assets";

const LeaderBoard = () => {
  return (
    <div className="bg-pinkLightThree flex items-center px-10 py-4 rounded-[20px] gap-8 hover:bg-[#F2B7FF] hover:border hover:border-pinkOne">
      <div className="rounded-full bg-purpleFunf text-white w-10 h-10 text-3xl flex items-center justify-center">
        1
      </div>
      <Avater className="w-10 h-10" />
      <div className="flex flex-col gap-2 items-start justify-start">
        <h3 className="font-bold text-xl">Ahmed</h3>
        <div className="flex items-center gap-2">
          <Star />
          <p>2,569 points</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
