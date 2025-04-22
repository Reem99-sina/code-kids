import {  Chart, Clock, RedArrow } from "@/assets";
import { Button } from "../common/button.component";
import ProgressBar from "../common/ProgressBar";
import RewardBadgeStar from "../common/reward-badge-star";
import { useNavigate } from "react-router-dom";
// import { useGetRecommededCourses } from "@/services/parent-service";

interface props {
  title: string;
  ratting: number;
  num_connect: number;
  cost: number;
  ages: string;
  min: number;
  prev_cost: number;
}
const Card = ({ title }: props) => {
  const navigate=useNavigate()
  // const { data: dataRecommended } = useGetRecommededCourses({ id: id });
  // console.log(dataRecommended, "dataRecommended");
  
  return (
    <div className="min-h-[400px] rounded-3xl mx-4 my-2 bg-white hover:bg-hoverCard  hover:shadow-[0px_0px_6px_0px_#FF0084] hover:border-[1px_solid_#FF1D92] ">
      <img src="/course.png" className="w-full h-[136px]" />
      <div className="py-6 px-4 flex flex-col gap-2  items-start justify-start">
        <h2 className="text-xl font-bold text-start">{title}</h2>
        <ProgressBar progress={30} isInCart color="#A91DFF" />
        <p className="text-[#6D6D6D] text-xs">68% total compared</p>
        <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-1">
          <Chart />
          <p>
            Level: <span className="text-xs font-bold">Medium</span>{" "}
          </p>
        </div>
        <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-1">
          <Clock />
          <p>
            Last Lesson:{" "}
            <span className="text-xs font-bold">2 days ago</span>{" "}
          </p>
        </div>

        <RewardBadgeStar badges={4} stars={4} />
        <div>
          <Button
            text="Continue Learning"
            className="!text-base font-bold !rounded-full px-4 py-2 whitespace-nowrap"
            endIcon={<RedArrow className="ms-3" />}
            onClick={()=>navigate("/assembly-game")}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
