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
          "pt-28 flex flex-col gap-3 max-w-[430px] text-justify",
          className
        )}
      >
        <h2 className="text-yellowOne font-black text-[3rem]">{title}</h2>
        <p className="font-black text-[2rem]  text-white">{desc}</p>
      </div>
      <div className=" absolute -left-8 bottom-0">
        <Child />
      </div>
    </div>
  );
};

export default CommenSide;
