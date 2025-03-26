import { Star } from "@/assets";
import { Button } from "../common/button.component";

interface props {
  title: string;
  ratting: number;
  num_connect: number;
  cost: number;
  ages: string;
  min: number;
  prev_cost: number;
}
const RecommededCourse = ({
  title,
  ratting,
  num_connect,
  cost,
  ages,
  min,
  prev_cost,
}: props) => {
  return (
    <div className="rounded-3xl mx-4 my-2 bg-white hover:bg-hoverCard  hover:shadow-[0px_0px_6px_0px_#FF0084] hover:border-[1px_solid_#FF1D92] ">
      <img src="/course.png" className="w-full h-[211px]" />
      <div className="py-6 px-4 flex flex-col gap-4  items-start justify-start min-w-[312px]">
        <h2 className="text-2xl font-bold text-start">{title}</h2>
        <div className="flex gap-1 items-center">
          <Star />
          <p>{ratting}</p>
          <p>({num_connect})</p>
        </div>
        <div className="flex gap-3 items-center">
          <h2 className="text-pinkOne font-black text-xl">EGP {cost}</h2>
          <p className="line-through text-[#8E8E8E] text-base">
            EGP {prev_cost}
          </p>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="bg-lightPink px-4 py-2 text-black flex flex-col items-center justify-center gap-1 rounded-lg">
            <p className="font-bold">{ages}</p>
            <p className="text-[#676767]">Ages</p>
          </div>
          <div className="bg-lightPink px-4 py-2 text-black flex flex-col items-center justify-center gap-1 rounded-lg">
            <p className="font-bold">{min}</p>
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
