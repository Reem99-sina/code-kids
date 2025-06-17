import { Button } from "../common/button.component";
import { Star } from "@/assets";

interface ExploreProps {
  title: string;
  price: string;
  oldPrice: string;
  star: string;
  rating: string;

  min: string;
  type: string;
}

const FeedCard = ({
  title,
  price,
  oldPrice,
  min,
  type,
  star,
  rating,
}: ExploreProps) => {
  return (
    <div className="shadow-[0px_4px_4px_0px_#9A9A9A0D] flex  mx-4 bg-white rounded-3xl p-6 h-auto z-10 hover:bg-hoverCard  hover:shadow-[0px_0px_6px_0px_#FF0084] hover:border-[1px_solid_#FF1D92] my-3 gap-3">
      <div>
        <img src="/explore.png" className="w-[142px] h-[136px]" />
      </div>
      <div className="flex flex-col gap-1 text-start ">
        <h3 className="text-xl font-black text-[#3C3C3C]">{title}</h3>
        <div className="flex gap-1 items-center text-xs">
          <Star />
          <p>{star ? star : ""}</p>
          <p>({rating ? `${rating}` : ""})</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-max bg-lightPink text-[#676767] flex  items-center justify-start gap-1 rounded-lg text-xs p-1">
            <p className="">{min}</p>
           
          </div>
          <div className="w-max bg-lightPink text-[#676767] flex  items-center justify-start gap-1 rounded-lg text-xs p-1">
            <p className="">{type}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-pink-600 font-bold text-lg">EGP {price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              EGP {oldPrice}
            </span>
          )}
        </div>
        <div className="my-2 flex  gap-2">
          <Button text="Schedule" className="!rounded-full !text-xs" />
          <Button
            text="View Profile"
            className="!rounded-full !bg-transparent  !text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
