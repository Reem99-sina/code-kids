import {
  Business,
  Coding,
  Creative,
  Culture,
  LifeSkills,
  Steam,
} from "@/assets";
import {
  //   useCoursesByIdTracksQuery,
  useTracksQuery,
} from "@/services/track-service";
import { FilterSection, trackInterface } from "@/types/track.type";
import clsx from "clsx";
import { useMemo, useState } from "react";

import Filter from "./filter";
import { courses } from "../home-parent/section-three";
import RecommededCourse from "../home-parent/recommeded-course";

const tracks = [
  { name: "coding", image: <Coding className="w-24 h-24" /> },
  { name: "business", image: <Business className="w-24 h-24" /> },
  { name: "creativity", image: <Creative className="w-24 h-24" /> },

  { name: "steam", image: <Steam className="w-24 h-24" /> },
  { name: "life skills", image: <LifeSkills className="w-24 h-24" /> },
  { name: "culture & language", image: <Culture className="w-24 h-24" /> },
];

const filterData: FilterSection[] = [
  {
    title: "Category",
    element: [
      {
        title: "Development",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center text-orange-500 bg-orange-100 rounded">
            <span className="text-xs">⚙️</span>
          </div>
        ),
        children: [
          { name: "Web development", count: 574 },
          { name: "Data Science", count: 568 },
          { name: "Mobile Development", count: 1345, isSelected: true },
          { name: "Software Testing", count: 317 },
          { name: "Software Engineering", count: 31 },
          { name: "Software Development Tools", count: 558 },
          { name: "No-Code Development", count: 37 },
        ],
      },
      {
        title: "Business",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">💼</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Finance & Accounting",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">📊</span>
          </div>
        ),
        children: [],
      },
      {
        title: "IT & Software",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">💻</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Office Productivity",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">📝</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Personal Development",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">🧠</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Design",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">🎨</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Marketing",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">📢</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Lifestyle",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">🌿</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Photography & Video",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">📷</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Music",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">🎵</span>
          </div>
        ),
        children: [],
      },
      {
        title: "Health & Fitness",
        icon: (
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-xs">💪</span>
          </div>
        ),
        children: [],
      },
    ],
  },
  {
    title: "Rating",
    element: [
      {
        title: " ★ 3.5",
        count: "4566",
      },
      { title: " ★ 5", count: 1200 },
      { title: " ★4.5", count: 1500 },
      { title: " ★4", count: 1800 },
      { title: " ★ 3.5", count: 2000 },
    ],
  },
  {
    title: "Course level",
    element: [
      {
        title: " All Level",
        count: "4566",
      },
      { title: " Beginner", count: 1200 },
      { title: " Intermediate", count: 1500 },
      { title: " Expert", count: 1800 },
    ],
  },
  {
    title: "Price",
    type: "price",
    element: [
      {
        title: "Paid",
        count: "4566",
      },
      { title: " Free", count: 1200 },
    ],
  },
  {
    title: "Duration",

    element: [
      {
        title: "6-12 Months",
        count: "4566",
      },
      { title: "3-6 Months", count: 1200 },
      { title: "1-3 Months", count: 1200 },
      { title: "1-4 Weeks", count: 1200 },
      { title: "1-7 Days", count: 1200 },
    ],
  },
];

const SectionTracks = () => {
  const { data } = useTracksQuery();
  const [track, setTrack] = useState<number | undefined>();
  const findImage = useMemo(() => {
    return (ele: trackInterface) =>
      tracks?.find((elem) => elem?.name.includes(ele?.name));
  }, []);
  //   const { data: dataCourses } = useCoursesByIdTracksQuery({ id: track });

  return (
    <>
      {" "}
      <div className="bg-[url('@/assets/bg-track.png')] bg-cover bg-no-repeat min-h-[526px] h-full mt-[7%] flex flex-col justify-center items-center">
        <div className="container mx-auto">
          <h3 className="text-white font-bold !text-start w-full text-2xl">
            Tracks
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4">
          {data?.map((ele) => (
            <div
              className="text-white capitalize font-bold cursor-pointer"
              onClick={() => setTrack(ele?.id)}
              key={ele?.id}
            >
              <div
                className={clsx(
                  "hover:bg-[url('@/assets/select-vector.png')] bg-[url('@/assets/Vector.png')] bg-cover bg-no-repeat",
                  "p-12",
                  track == ele?.id
                    ? "bg-[url('@/assets/select-vector.png')] "
                    : "bg-[url('@/assets/Vector.png')]"
                )}
              >
                {findImage(ele)?.image}
              </div>
              <p>{ele?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Filter filterData={filterData}>
        <div className="grid grid-cols-3 items-center gap-3 flex-wrap">
          {courses?.map((ele, index) => (
            <RecommededCourse
              {...ele}
              className="!bg-[#FDF2FF] hover:!bg-hoverCard"
              key={ele?.title + index}
            />
          ))}
        </div>
      </Filter>
    </>
  );
};

export default SectionTracks;
