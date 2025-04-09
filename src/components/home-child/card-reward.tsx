import { Avater, Avater10 } from "@/assets";
import clsx from "clsx";

interface feedProps {
  desc: string[];
}

const CardReward = ({ desc }: feedProps) => {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-3xl py-4 px-5 mx-4 min-w-[371px] min-h-[221px]">
      <div className="flex items-center gap-4 text-black">
        {desc?.length > 1 ? (
          <Avater10 className="w-14 h-14" />
        ) : (
          <Avater className="w-14 h-14" />
        )}
        <div className="flex flex-col gap-1 text-start">
          <h3 className="text-lg font-black ">you</h3>
        </div>
      </div>
      <ul
        className={clsx(
          desc?.length > 1 ? "list-disc" : "",
          " text-[#6B6B6B] text-start ms-4"
        )}
      >
        {desc?.map((ele) => (
          <li key={ele} className="text-xl">
            {ele}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardReward;
