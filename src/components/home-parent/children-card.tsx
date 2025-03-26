import {
  ActiveCourse,
  Add,
  Avater,
  Badges,
  Clock,
  Done,
  Reward,
  Star,
  Tracks,
} from "@/assets";
import { Line } from "../common/line.component";
import { Button } from "../common/button.component";
import { FC, useMemo } from "react";
import { avatars } from "@/lib/common-data";

const dates = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
interface props {
  name: string;
  age: number;
  numCompletetracks: number;
  numCompleteCourses: number;
  courses?: [];
  avatar_id?: number;
}
const ChildrenCard: FC<props> = ({
  name,
  age,
  numCompletetracks,
  numCompleteCourses,
  avatar_id,
}) => {
  const AvatarChild = useMemo(() => {
    
    return avatars?.find((ele) => ele?.id == avatar_id)?.icon;
  }, [avatar_id]);

  return (
    <div className="shadow-[0px_14px_42px_0px_#080F340F] p-4 bg-white rounded-3xl min-w-[421px] z-10">
      <div className="flex items-center gap-4 text-black">
        {AvatarChild ? (
          <AvatarChild className="w-16 h-16" />
        ) : (
          <Avater className="w-16 h-16" />
        )}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-black">{name}</h3>
          <p className="text-[#828282] text-xl">{age} years old</p>
        </div>
      </div>
      <div className="py-5">
        <Line />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-[#5F5F5F] flex items-center gap-2">
          <Tracks />
          <p>
            Completed Tracks:{" "}
            <span className="text-[#5F5F5F]">{numCompletetracks}</span>
          </p>
        </div>
        <div className="text-sm text-[#5F5F5F] flex items-center gap-2">
          <Tracks />
          <p>
            Completed Courses:{" "}
            <span className="text-[#5F5F5F]">{numCompleteCourses}</span>
          </p>
        </div>
      </div>
      <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-3">
        <ActiveCourse />
        <p>Active Courses:</p>
      </div>
      <ul className="pt-3 text-xs font-black text-[#545454] text-start list-disc ms-4 flex flex-col gap-2">
        <li>Coding Basics (60%) – Medium</li>
        <li>Coding Basics (60%) – Medium</li>
      </ul>
      <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-5">
        <Clock />
        <p>Last Activity: Completed a lesson 1 day ago</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-4">
          <Reward />
          <p>Rewards:</p>
        </div>
        <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-4">
          <Badges />
          <p className="font-bold">4 Badges</p>
        </div>
        <div className="text-sm text-[#5F5F5F] flex items-center gap-2 pt-4">
          <Star />
          <p className="font-bold">4 Stars</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        {dates?.map((ele) => (
          <div className="flex flex-col text-[#8E8E8E]" key={ele}>
            <p>{ele}</p>
            <Done />
          </div>
        ))}
      </div>
      <div className="flex items-center mt-5">
        <Button
          className="!w-auto !px-6 !py-3 !rounded-full "
          text="Add Course"
          startIcon={<Add className="me-3" />}
        />
        <Button
          className="!w-auto !px-6 !py-3 !rounded-full !bg-transparent"
          text="View Details"
        />
      </div>
    </div>
  );
};

export default ChildrenCard;
