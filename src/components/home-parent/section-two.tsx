import { AddChild } from "@/assets";
import ChildrenCard from "./children-card";
import { useParentQuery } from "@/services/parent-service";
import { useNavigate } from "react-router-dom";

const children = [
  {
    name: "kareem",
    age: 9,
    numCompletetracks: 7,
    numCompleteCourses: 7,
    courses: [],
  },
  {
    name: "Assma",
    age: 9,
    numCompletetracks: 7,
    numCompleteCourses: 7,
    courses: [],
  },
];

const SectionTwo = () => {
  const route = useNavigate();
  const { data } = useParentQuery();

  return (
    <div className="bg-white xl:min-h-[450px]  pt-14">
      <div className="flex flex-col items-start justify-start container mx-auto text-black gap-8">
        <h2 className="text-4xl font-black">Child Overview</h2>
        <div className="flex items-center gap-4 flex-wrap">
          {data && data?.length > 0
            ? data?.map((ele) => (
                <ChildrenCard
                  key={ele?.id}
                  name={ele?.fullname||""}
                  age={ele?.age||0}
                  numCompleteCourses={3}
                  numCompletetracks={4}
                  avatar_id={ele?.avatarId}
                />
              ))
            : children?.map((ele) => (
                <ChildrenCard
                  key={ele?.name}
                  name={ele?.name}
                  age={ele?.age}
                  numCompleteCourses={3}
                  numCompletetracks={4}
                />
              ))}
          <AddChild
            className="z-10 cursor-pointer"
            onClick={() => route("/add-child")}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
