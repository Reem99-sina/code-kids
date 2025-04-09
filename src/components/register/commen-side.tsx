import { Child } from "@/assets";
import clsx from "clsx";
import { FC } from "react";

interface props {
  title: string;
  desc: string;
  className?: string;
}

const CommenSide: FC<props> = ({ title, desc, className }) => {
  return (
    <div className="relative w-[50%] px-10 min-h-[625px]">
      <div
        className={clsx(
          "pt-14 flex flex-col gap-4 max-w-[430px] text-justify md:pt-28",
          className
        )}
      >
        <h2 className="text-yellowOne font-black md:text-[3rem] text-xl leading-[140%] tracking-tight">
          {title}
        </h2>
        <p className="font-black md:text-[2rem] text-lg  text-white leading-[140%]">
          {desc}
        </p>
      </div>
      <div className=" absolute -left-8 bottom-0">
        <Child />
      </div>
    </div>
  );
};

export default CommenSide;
