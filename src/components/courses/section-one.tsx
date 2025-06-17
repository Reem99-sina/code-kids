import Slider, { Settings } from "react-slick";
import { NextArrow, PrevArrow } from "../common/slider-arrow";
import "@/assets/bg-courses.png";
import { CuteLittleGirl, ELearning } from "@/assets";
import { Button } from "../common/button.component";

const settings: Settings = {
  dots: false,

  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerPadding: "0px",
};
const data = [
  {
    title: "Edudu offers you a 30% discount this season",
    desc: "Promotion valid from May 1, 2025 - June 30, 2025",
    image: <CuteLittleGirl />,
    button: "Explore now",
  },
  {
    title: "Business",
    desc: "Become a cross-functional force through business training. Today’s business objectives are achieved with user research, design, distribution, analysis, and strategy. Whether you’re getting started or advancing your career, you’ll establish the right foundations with business courses from Udacity’s School of Business.",
    image: <ELearning className="text-xl" />,
  },
];

const SectionOne = () => {
  return (
    <section className="relative">
      <div className="bg-[url('/main-parent.png')] min-h-[172px] w-full bg-repeat-round"></div>
      <div className="flex items-center justify-start container mx-auto">
        <div className="flex gap-4 w-full justify-start py-6 px-12 absolute left-0">
          <Slider {...settings} className="w-full h-full">
            {data?.map((ele,index) => (
              <div key={ele?.title+index} className="bg-[#FFF3E8] bg-[url('@/assets/bg-courses.png')] w-full rounded-3xl h-[326px] bg-contain  bg-no-repeat bg-center">
                <div className="flex items-center justify-center h-full ">
                  <div className="flex flex-col justify-center items-start text-start gap-3 w-[60%]">
                    <h3 className="text-4xl font-bold ">{ele?.title}</h3>
                    <p className="text-lg ">{ele?.desc}</p>
                    {ele?.button && (
                      <Button
                        text={ele?.button}
                        className="!w-auto rounded-full px-8"
                      />
                    )}
                  </div>
                  <div className="relative w-[35%] h-full">
                    <div className="absolute right-24 top-0">{ele?.image}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
