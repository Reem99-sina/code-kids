import { Dinosaur, Earth, Star } from "@/assets";
import ContentFooter from "@/components/footer/ContentFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const tags = [
  { title: "Overview", content: <></> },
  { title: "Curriculum", content: <></> },
  { title: "Mentors", content: <></> },
  { title: "Review", content: <></> },
];

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
      <div className="bg-purpleLightThree border-t-8 border-purpleSix  ">
        <div className="container mx-auto flex text-start my-5">
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="font-bold text-2xl">
              Complete Website Responsive Design: from Figma to Webflow to
              Website Design
            </h3>
            <p className="font-light text-[#4E5566]">
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
                  {tags?.map((ele,index) => (
                    <TabsTrigger
                      value={ele?.title}
                      key={ele?.title+index}
                      className="data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:text-black data-[state=active]:shadow-none rounded-none px-6 py-3 h-10 bg-transparent text-gray-600"
                    >
                      {ele?.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <TabsContent value="Overview" className="my-10">
                <h2 className="text-2xl font-bold">Description</h2>

                <p className="text-[#4E5566] leading-relaxed  mt-5">
                  It gives you a huge self-satisfaction when you look at your
                  work and say, "I made that!". I love that feeling after I'm
                  done working on something. When I lean back in my chair, look
                  at the final result with a smile, and say to myself, "Wow! I
                  did that!". It's a moment. It's especially satisfying when I
                  know I just made $5,000.
                </p>

                <p className="text-[#4E5566] leading-relaxed">
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

                <p className="text-[#4E5566] leading-relaxed">
                  For example, this is a Design course but I don't teach you
                  Photoshop. Because Photoshop is needlessly complicated for Web
                  Design. But people still teach it to web designers. I don't. I
                  teach Figma - a simple tool that is taking over the design
                  world. You will be designing a complete website within a week
                  while others are still learning how to create basic layouts in
                  Photoshop.
                </p>

                <p className="text-[#4E5566] leading-relaxed">
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
              <div className="text-[#4E5566] flex items-center my-5">
                <Check className="text-green-500"/>
                <p>
                  You will learn how to design beautiful websites using Figma,
                  an interface design tool used by designers at Uber, Airbnb and
                  Microsoft.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[0.3]"></div>
        </div>
      </div>
      <div>
        <ContentFooter />
      </div>
    </div>
  );
};

export default CoursesDetail;
