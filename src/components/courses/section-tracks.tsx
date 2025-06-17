import { FilterSection } from "@/types/track.type";

import { useState } from "react";

import Filter from "./filter";
import { courses } from "../home-parent/section-three";
import RecommededCourse from "../home-parent/recommeded-course";
import SectionTracksInCommen from "../common/section-tracks";

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
  const [track, setTrack] = useState<number | undefined | string>();

  //   const { data: dataCourses } = useCoursesByIdTracksQuery({ id: track });

  return (
    <>
      {" "}
      <SectionTracksInCommen
        track={track}
        changeTrack={(value) => setTrack(value)}
      />
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
