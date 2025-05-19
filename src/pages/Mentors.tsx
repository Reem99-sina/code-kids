import SectionThree from "@/components/common/section-three";
import Filter from "@/components/courses/filter";
import ContentFooter from "@/components/footer/ContentFooter";
import MentorCard from "@/components/mentors/mentor-card";
import SectionOne from "@/components/mentors/section-one";
import { FilterSection } from "@/types/track.type";

const filterData: FilterSection[] = [
  {
    title: "Specialty",
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

export const mentors = [
  {
    title: "Introduction to Web Development",
    desc: "Learn the basics of HTML, CSS, and JavaScript.",
    star: "4.2",
    rating: "422",
    students: 1245,
    ages: "12-18",
    category: "Development",
    price: 49.99,
    deepdesc:
      "This course provides a beginner-friendly introduction to building websites using modern web technologies. By the end, students will be able to create responsive pages and understand core web development principles.",
  },
  {
    title: "Introduction to Web Development",
    desc: "Learn the basics of HTML, CSS, and JavaScript.",
    star: "4.2",
    rating: "422",
    students: 1245,
    ages: "12-18",
    category: "Development",
    price: 49.99,
    deepdesc:
      "This course provides a beginner-friendly introduction to building websites using modern web technologies. By the end, students will be able to create responsive pages and understand core web development principles.",
  },
  {
    title: "Introduction to Web Development",
    desc: "Learn the basics of HTML, CSS, and JavaScript.",
    star: "4.2",
    rating: "422",
    students: 1245,
    ages: "12-18",
    category: "Development",
    price: 49.99,
    deepdesc:
      "This course provides a beginner-friendly introduction to building websites using modern web technologies. By the end, students will be able to create responsive pages and understand core web development principles.",
  },
];

const Mentors = () => {
  return (
    <div className="bg-white h-auto">
      <div className="bg-white h-auto">
        <SectionOne />
        <Filter filterData={filterData}>
          <div className="flex flex-col items-start gap-5">
            <h3 className="font-bold text-2xl">All Mentors (04)</h3>
            <div className="flex flex-col gap-3">
              {mentors?.map((ele, index) => (
                <MentorCard {...ele} key={ele?.title + index} />
              ))}
            </div>
          </div>
        </Filter>
        <SectionThree title="Every course your child takes today is a step toward a brighter future — you're building that future with love and purpose." />
      </div>
      <div>
        <ContentFooter />
      </div>
    </div>
  );
};

export default Mentors;
