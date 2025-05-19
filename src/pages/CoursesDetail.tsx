import {
  Avater,
  Dinosaur,
  Earth,
  Email,
  Star,
  StarHalf,
  StarRating,
} from "@/assets";
import ContentFooter from "@/components/footer/ContentFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart2,
  Check,
  Clock,
  Clock3,
  Copy,
  Facebook,
  File,
  FolderOpen,
  MoveRight,
  Play,
  Plus,
  Twitter,
  Users,
} from "lucide-react";
import { mentors } from "./Mentors";
import MentorCard from "@/components/mentors/mentor-card";
import { Progress } from "@/components/ui/progress";
import { Select } from "@/components/common/select.component";
import { Line } from "@/components/common/line.component";
import { Button } from "@/components/common/button.component";

const tags = [
  { title: "Overview", content: <></> },
  { title: "Curriculum", content: <></> },
  { title: "Mentors", content: <></> },
  { title: "Review", content: <></> },
];

const curriculum = [
  {
    id: "getting-started",
    title: "Getting Started",
    lessons: [
      {
        id: "whats-is-webflow",
        title: "What's is Webflow?",
        type: "video",
        duration: "07:31",
      },
      {
        id: "sign-up-in-webflow",
        title: "Sign up in Webflow",
        type: "video",
        duration: "07:31",
      },
      {
        id: "webflow-terms-conditions",
        title: "Webflow Terms & Conditions",
        type: "document",
        fileSize: "5.3 MB",
      },
      {
        id: "teaser-of-webflow",
        title: "Teaser of Webflow",
        type: "video",
        duration: "07:31",
      },
      {
        id: "practice-project",
        title: "Practice Project",
        type: "document",
        fileSize: "5.3 MB",
      },
    ],
  },
  {
    id: "secret-of-good-design",
    title: "Secret of Good Design",
    lessons: [],
  },
  {
    id: "practice-design-like-an-artist",
    title: "Practice Design Like an Artist",
    lessons: [],
  },
  {
    id: "web-development-webflow",
    title: "Web Development (webflow)",
    lessons: [],
  },
  {
    id: "secrets-of-making-money-freelancing",
    title: "Secrets of Making Money Freelancing",
    lessons: [],
  },
  {
    id: "advanced",
    title: "Advanced",
    lessons: [],
  },
];
const ratings = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 21 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0.5 },
];

const reviews = [
  {
    id: 1,
    name: "Guy Hawkins",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment:
      "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    timeAgo: "1 week ago",
  },
  {
    id: 2,
    name: "Dianne Russell",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment:
      "The course exceeded my expectations. The instructor explains complex concepts in a way that's easy to understand. I've learned so much in such a short time!",
    timeAgo: "51 mins ago",
  },
];

const averageRating = 4.8;

const CoursesDetail = () => {
  return (
    <div>
      <div className="bg-[url('/header-add-child.png')] bg-center bg-cover w-full min-h-[300px] bg-blackPurple flex items-center justify-center text-white relative">
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-bold">View Courses</h3>
          <div className="flex items-center gap-3 text-white font-bold">
            <p>Dashboard</p>
            <Earth />
            <p>Courses</p>
            <Earth />
            <p>View Courses</p>
          </div>
        </div>
        <Dinosaur className="absolute bottom-0 left-0" />
      </div>
      <div className="relative bg-white z-10">
        <div className="bg-purpleLightThree border-t-8 border-purpleSix h-[150px] absolute left-0 right-0 -z-10"></div>
        <div className="container mx-auto flex text-start py-5 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="font-bold text-2xl">
              Complete Website Responsive Design: from Figma to Webflow to
              Website Design
            </h3>
            <p className="font-light text-grayCommon">
              3 in 1 Course: Learn to design websites with Figma, build with
              Webflow, and make a living freelancing.
            </p>
            <div className="flex gap-1 items-center text-xs">
              <Star />
              <p>4.8</p>
              <p>( 123455 )</p>
            </div>
            <div className="rounded-2xl">
              <img
                src="/welcome-section-background.png"
                className="w-[824px] h-[424px] rounded-2xl"
              />
            </div>
            <Tabs defaultValue="Overview" className="w-full">
              <div className="border-b">
                <TabsList className="h-10 w-full bg-transparent justify-start rounded-none p-0">
                  {tags?.map((ele, index) => (
                    <TabsTrigger
                      value={ele?.title}
                      key={ele?.title + index}
                      className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-black data-[state=active]:shadow-none rounded-none px-6 py-3 h-10 bg-transparent text-gray-600"
                    >
                      {ele?.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <TabsContent value="Overview" className="my-10">
                <h2 className="text-2xl font-bold">Description</h2>

                <p className="text-grayCommon leading-relaxed  mt-5">
                  It gives you a huge self-satisfaction when you look at your
                  work and say, "I made that!". I love that feeling after I'm
                  done working on something. When I lean back in my chair, look
                  at the final result with a smile, and say to myself, "Wow! I
                  did that!". It's a moment. It's especially satisfying when I
                  know I just made $5,000.
                </p>

                <p className="text-grayCommon leading-relaxed">
                  I do! And that's why I got into this field. Not for the love
                  of Web Design, which I do now. But for the LIFESTYLE! There
                  are many ways one can choose this lifestyle. This is my way.
                  This is how I achieved a lifestyle I've been fantasizing about
                  for five years. And I'm going to teach you the same. Often
                  people think Web Design is complicated. That it needs some
                  creative talent or knack for computers. Sure, a lot of people
                  think it's very complicated. People make the simplest things
                  complicated. Like most subjects taught in the universities.
                  But I don't like complicated. I like easy. I like life hacks.
                  I like to take the shortest and simplest route to my
                  destination. I haven't gone to art school or have a computer
                  science degree. I'm an outsider to this field who hacked
                  himself into it, somehow ending up being a sought-after
                  professional. That's how I'm going to teach you Web Design. So
                  you're not demotivated nor stay with needless complexity. So
                  you enjoy the process because it's simple and fun. So you can
                  become a Freelance Web Designer in no time.
                </p>

                <p className="text-grayCommon leading-relaxed">
                  For example, this is a Design course but I don't teach you
                  Photoshop. Because Photoshop is needlessly complicated for Web
                  Design. But people still teach it to web designers. I don't. I
                  teach Figma - a simple tool that is taking over the design
                  world. You will be designing a complete website within a week
                  while others are still learning how to create basic layouts in
                  Photoshop.
                </p>

                <p className="text-grayCommon leading-relaxed">
                  Second, this is a Development course. But I don't teach you
                  how to code. Because for Web Design coding is needlessly
                  complicated and takes too long to learn. Instead, I teach
                  Webflow - a tool that is taking over the web design world. You
                  will be building complex websites within two weeks while
                  others are still learning the basics of HTML & CSS. Third,
                  this is a Freelancing course. But I don't just teach you how
                  to write great proposals. I give you a winning proposal
                  template. When you're done with the course, you will have a
                  stunning portfolio website with portfolio pieces already in
                  it. Buy this course now and take it whenever the time is right
                  for you.
                </p>
              </TabsContent>
            </Tabs>
            <div className="bg-[#E1F7E3] p-10 rounded-2xl">
              <h3 className="font-bold text-2xl">
                What you will learn in this course
              </h3>
              <div className="text-grayCommon flex items-center my-5">
                <Check className="text-green-500" />
                <p>
                  You will learn how to design beautiful websites using Figma,
                  an interface design tool used by designers at Uber, Airbnb and
                  Microsoft.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <h3 className="font-bold text-2xl mb-3">
                Who this course is for:
              </h3>
              <div className=" flex items-center gap-2">
                .
                <p className="text-grayCommon">
                  This course is for those who want to launch a Freelance Web
                  Design career.
                </p>
              </div>
              <div className=" flex items-center gap-2">
                <MoveRight className="text-orangeThree" />
                <p className="text-grayCommon">
                  This course is for those who want to launch a Freelance Web
                  Design career.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <h3 className="font-bold text-2xl mb-3">Course requirements</h3>
              <ul className="list-disc">
                <li>
                  <p className="text-grayCommon">
                    Nunc auctor consequat lorem, in posuere enim hendrerit sed.
                  </p>
                </li>
                <li>
                  <p className="text-grayCommon">
                    Nunc auctor consequat lorem, in posuere enim hendrerit sed.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full mt-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Curriculum</h2>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-pink-500" />
                    <span className="text-sm text-gray-700">6 Sections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm text-gray-700">202 lectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span className="text-sm text-gray-700">19h 37m</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {curriculum.map((section) => (
                    <AccordionItem
                      key={section.id}
                      value={section.id}
                      className="border-b last:border-b-0 px-4 py-2"
                    >
                      <AccordionTrigger
                        className={`hover:no-underline py-2 bg-transparent ${
                          section.id === "getting-started"
                            ? "text-purple-600 font-medium"
                            : "text-gray-800"
                        }`}
                      >
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-1 py-2">
                          {section.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between py-2 px-1 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                {lesson.type === "video" ? (
                                  <Play className="w-5 h-5 text-gray-500" />
                                ) : (
                                  <File className="w-5 h-5 text-gray-500" />
                                )}
                                <span className="text-sm text-gray-700">
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-sm text-gray-500">
                                {lesson.type === "video"
                                  ? lesson.duration
                                  : lesson.fileSize}
                              </span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-5">
              <h3 className="text-2xl font-bold text-gray-900">
                Course mentors (02)
              </h3>

              {mentors?.map((ele,index) => <MentorCard {...ele} key={ele?.title+index}/>)}
            </div>
            <div className="relative w-full max-w-4xl mx-auto mt-3">
              <div className="border  rounded-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Course Rating
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Left side - Average rating */}
                  <div className="flex flex-col items-center">
                    <div className="text-6xl font-bold text-gray-900 mb-2">
                      {averageRating}
                    </div>
                    <div className="flex items-center mb-1">
                      <StarRating className="w-5 h-5 fill-orange-400 text-orange-400" />
                      <StarRating className="w-5 h-5 fill-orange-400 text-orange-400" />
                      <StarRating className="w-5 h-5 fill-orange-400 text-orange-400" />
                      <StarRating className="w-5 h-5 fill-orange-400 text-orange-400" />
                      <StarHalf className="w-5 h-5 fill-orange-400 text-orange-400" />
                    </div>
                    <div className="text-sm text-gray-700">Course Rating</div>
                  </div>

                  {/* Right side - Rating breakdown */}
                  <div className="flex-1">
                    {ratings.map((rating, index) => (
                      <RatingBreakdown
                        key={index}
                        stars={rating.stars}
                        percentage={rating.percentage}
                        showHalf={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="border  rounded-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Parents Feedback
                  </h2>
                  <Select
                    options={[
                      {
                        label: "All Ratings",
                        value: "All Ratings",
                      },
                      {
                        label: "5 Star Rating",
                        value: "5 Star Rating",
                      },
                    ]}
                    onChange={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                    styleCustom={{ width: "150px" }}
                  />
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="pb-6 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Avater className="w-10 h-10" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">
                              {review.name}
                            </span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">
                              {review.timeAgo}
                            </span>
                          </div>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <StarRating
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 mt-2">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[0.3] p-6 rounded-2xl bg-white border ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 mt-2">
                <span className="text-pinkOne font-bold text-lg">EGP 1500</span>

                <span className="text-gray-400 line-through text-sm">
                  EGP 1500
                </span>
              </div>
              <div className="text-orangeThree bg-[#FFEEE8] py-2 px-3 rounded-lg text-sm">
                <p>56% off</p>
              </div>
            </div>
            <div className="text-[#E34444] flex items-center gap-2 text-xs mt-2">
              <Clock className="w-4" />
              <p>2 days left at this price!</p>
            </div>
            <Line className="my-6" />
            <div className="w-full max-w-md mx-auto text-xs">
              {/* Course Info Section */}
              <div className=" rounded-md  mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className=" text-gray-700">Course Duration</span>
                  </div>
                  <div className=" text-right">6 Months</div>

                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-gray-400" />
                    <span className=" text-gray-700">Course Level</span>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-center">
                    <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
                      <Plus className="w-3 h-3 text-white" />
                    </div>
                    <span className=" text-gray-600 whitespace-nowrap">
                      Beginner and Intermediate
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className=" text-gray-700">Students Enrolled</span>
                  </div>
                  <div className=" text-right">69,419,618</div>
                </div>
              </div>
            </div>
            <Line className="my-6" />
            <div className="relative   rounded-md  mb-4">
              <div className="mt-2 space-y-3">
                <Button
                  text="Add to Cart"
                  startIcon={<Plus className="w-4 h-4 mr-2" />}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium h-12 rounded-full"
                />

                <div className="text-center">
                  <Button
                    text="Buy now"
                    className="w-full bg-white  text-black font-medium h-12 rounded-full"
                  />
                </div>

                <div className="text-xs text-gray-500 italic mt-2">
                  <span className="font-medium">Note:</span> all course have
                  30-days money-back guarantee.
                </div>
              </div>
            </div>
            <Line className="my-6" />
            <div className=" rounded-md  mb-4">
              <h3 className="font-medium text-gray-800 mb-3">
                This course includes:
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock3 className="w-5 h-5 text-purple-600 mt-0.5" />
                  <span className="text-sm text-gray-600">Lifetime access</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                    <span className="text-lg font-bold">$</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    30-days money-back guarantee
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Free exercises file & downloadable resources
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Shareable certificate of completion
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="15"
                        rx="2"
                        ry="2"
                      ></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Access on mobile , tablet and TV
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    100% online course
                  </span>
                </div>
              </div>
            </div>
            <Line className="my-6" />
            <div className=" rounded-md ">
              <h3 className="font-medium text-gray-800 mb-3">
                Share this course:
              </h3>

              <div className="flex items-center gap-3">
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                  <Copy className="w-5 h-5 text-gray-600" />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                  <Facebook />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                  <Twitter />
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                  <Email className="!fill-black"/>
                </button>
                <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContentFooter />
      </div>
    </div>
  );
};

export default CoursesDetail;

const RatingBreakdown = ({
  stars,
  percentage,
  showHalf = false,
}: RatingBreakdownProps) => {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="flex items-center gap-1 w-32">
        {[...Array(5)].map((_, i) => {
          if (i < Math.floor(stars)) {
            return (
              <StarRating
                key={i}
                className="w-5 h-5 fill-orange-400 text-orange-400"
              />
            );
          } else if (i === Math.floor(stars) && showHalf) {
            return (
              <StarHalf
                key={i}
                className="w-5 h-5 fill-orange-400 text-orange-400"
              />
            );
          } else {
            return <StarRating key={i} className="w-5 h-5 text-orange-200" />;
          }
        })}
        <span className="ml-1 text-sm text-gray-700">{stars} Star Rating</span>
      </div>
      <div className="flex-1">
        <Progress
          value={percentage}
          className="h-2 bg-orange-100"
          indicatorClassName="bg-orange-400"
        />
      </div>
      <div className="w-10 text-right text-sm text-gray-700">{percentage}%</div>
    </div>
  );
};


export interface RatingBreakdownProps{
  stars:number,
  percentage:number,
  showHalf:boolean,
}