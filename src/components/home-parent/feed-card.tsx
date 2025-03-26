import { Avater, Avater10 } from "@/assets";
import clsx from "clsx";
import { Button } from "../common/button.component";
import { FC } from "react";

interface feedProps {
  name: string;
  age: number;
  desc: string[];
}

export const FeedCard = ({ name, age, desc }: feedProps) => {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-3xl py-4 px-5 mx-4 min-w-[371px] min-h-[221px]">
      <div className="flex items-center gap-4 text-black">
        {desc?.length > 1 ? (
          <Avater10 className="w-14 h-14" />
        ) : (
          <Avater className="w-14 h-14" />
        )}
        <div className="flex flex-col gap-1 text-start">
          <h3 className="text-lg font-black">{name}</h3>
          <p className="text-[#828282] text-sm">{age} years old</p>
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

interface ExploreProps {
  title: string;
  desc: string;
  min: number;
  type: boolean;
}

export const ExploreCard: FC<ExploreProps> = ({ title, desc, min, type }) => {
  return (
    <div className="shadow-[0px_4px_4px_0px_#9A9A9A0D] flex flex-col mx-4 bg-white rounded-3xl p-6 h-[450px] z-10 hover:bg-hoverCard  hover:shadow-[0px_0px_6px_0px_#FF0084] hover:border-[1px_solid_#FF1D92] my-3">
      <div>
        <img src="/explore.png" className="w-[142px] h-[136px]" />
      </div>
      <div className="flex flex-col gap-1 text-start ">
        <h3 className="text-xl font-black text-[#3C3C3C]">{title}</h3>
        <div className="w-max bg-lightPink text-[#676767] flex  items-center justify-start gap-1 rounded-lg text-xs p-1">
          <p className="">{min}</p>
          <p className=""> mins</p>
        </div>
        <div className="my-2">
          <p className="text-[#8E8E8E] text-sm font-normal">{desc}</p>
        </div>
        <div className="my-2 flex flex-col gap-2">
          {type ? (
            <>
              <Button
                text="Assign Quiz to Child"
                className="!rounded-full !text-xs"
              />
              <Button
                text="Start Skill Quiz"
                className="!rounded-full !bg-transparent  !text-xs"
              />
            </>
          ) : (
            <>
              <Button
                text="Start Skill Quiz"
                className="!rounded-full  !text-xs"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
