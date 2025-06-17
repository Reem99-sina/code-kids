import { Star } from "@/assets";
import { Button } from "../common/button.component";
import { RecommendedCoursesResponse } from "@/types/parent.type";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

interface props {
  title?: string;
  ratting?: number;
  num_connect?: number;
  cost?: number;
  ages?: string;
  min?: number;
  prev_cost?: number;
  className?: string;
}
const RecommededCourse = ({
  title,
  ratting,
  num_connect,
  cost,
  ages,
  min,
  prev_cost,
  name,
  id,
  rate,
  totalRatings,
  price,
  originalPrice,
  ageRange,
  period,
  className,
}: props & RecommendedCoursesResponse) => {
  const router=useNavigate()
  
  return (
    <div
      className={clsx(
        "min-w-[280px] rounded-3xl mx-4 my-2 bg-white hover:bg-hoverCard  hover:shadow-[0px_0px_6px_0px_#FF0084] hover:border-[1px_solid_#FF1D92] ",
        className
      )}
      onClick={()=>router("/course/1")}
    >
      <img src="/course.png" className="w-full h-[211px]" />
      <div className="py-6 px-4 flex flex-col gap-4  items-start justify-start">
        <h2 className="text-2xl font-bold text-start">
          {name ? name : title} {id}
        </h2>
        <div className="flex gap-1 items-center">
          <Star />
          <p>{rate ? rate : ratting}</p>
          <p>
            (
            {totalRatings || totalRatings == 0
              ? `${totalRatings}`
              : num_connect}
            )
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <h2 className="text-pinkOne font-black text-xl">
            EGP {price || price == 0 ? `${price}` : cost}
          </h2>
          <p className="line-through text-[#8E8E8E] text-base">
            EGP {originalPrice ? originalPrice : prev_cost}
          </p>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="bg-lightPink px-4 py-2 text-black flex flex-col items-center justify-center gap-1 rounded-lg">
            <p className="font-bold">
              {ageRange ? `${ageRange?.min} - ${ageRange?.max}` : ages}
            </p>
            <p className="text-[#676767]">Ages</p>
          </div>
          <div className="bg-lightPink px-4 py-2 text-black flex flex-col items-center justify-center gap-1 rounded-lg">
            <p className="font-bold">{period || period == 0 ? period : min}</p>
            <p className="text-[#676767]">Min</p>
          </div>
        </div>
        <div>
          <Button
            text="Add to Cart"
            className="text-base font-bold !rounded-full px-9 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default RecommededCourse;
