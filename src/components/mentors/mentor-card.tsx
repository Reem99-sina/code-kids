import { Mentors, Star } from "@/assets";
import { Users } from "lucide-react";
import { Button } from "../common/button.component";

interface props {
  title: string;
  desc: string;
  star: string;
  rating: string;
  students: number;
  ages: string;
  category: string;
  price: number;
  deepdesc: string;
}

const MentorCard = ({
  title,
  desc,
  star,
  rating,
  students,
  ages,
  category,
  price,
  deepdesc,
}: props) => {
  return (
    <div className="border border-gray-300 p-8 flex rounded-2xl gap-6 text-start">
      <div className=" ">
        <Mentors />
      </div>
      <div className="flex-1 flex flex-col items-start gap-2">
        <h3 className="font-bold text-black">{title}</h3>
        <p className=" text-[#6E7485]">{desc}</p>
        <div className="flex gap-1 items-center text-xs">
          <Star />
          <p>{star ? star : ""}</p>
          <p>({rating ? `${rating}` : ""})</p>
          <Users className="text-blue-600 text-xs" />
          <p>{students}</p>
          <p>Students</p>
        </div>
        <div className="flex gap-2 items-center text-xs">
          <div className="bg-lightPink px-4 py-2 text-black flex flex-col items-center justify-center gap-1 rounded-lg">
            <p className="font-bold">{ages}</p>
          </div>
          <div className="bg-lightPink px-4 py-2 text-black flex flex-col items-center justify-center gap-1 rounded-lg">
            <p className="font-bold">{category}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <h2 className="text-pinkOne font-black text-xl">EGP {price}</h2>
          <p className=" text-[#8E8E8E] text-base">Per session</p>
        </div>
        <p className="text-[#8E8E8E] text-base">{deepdesc}</p>
        <div className="flex items-center">
          <Button text="Schedule" className="rounded-full px-8" />
          <Button
            text="View Profile"
            className="bg-transparent whitespace-nowrap rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
