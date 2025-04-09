import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomArrowProps } from "react-slick";

export const PrevArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;

  return (
    <div
      className={clsx(className, "rounded-full !bg-white  cursor-pointer z-20 w-0 h-0")}
      onClick={onClick}
    >
      <div className="!p-3 !rounded-full !bg-white  cursor-pointer h-16 w-16 absolute -right-16 top-0 ">
        <div className="bg-greenOne  rounded-full  text-white h-10 w-10 flex items-center justify-center ">
          <ChevronLeft className="text-4xl font-black"size={"md"} />
        </div>
      </div>
    </div>
  );
};

export const NextArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;

  return (
    <div
      className={clsx(className, " rounded-full bg-white  cursor-pointer w-0 h-0 z-20")}
      onClick={onClick}
    >
      <div className="!p-3 !rounded-full !bg-white  cursor-pointer h-16 w-16 absolute -left-16 top-0 ">
        <div className="bg-greenOne  rounded-full  text-white h-10 w-10 flex items-center justify-center ">
          <ChevronRight className="text-4xl font-black"size={"md"} />
        </div>
      </div>
    </div>
  );
};
