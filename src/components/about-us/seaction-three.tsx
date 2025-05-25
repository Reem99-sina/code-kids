import { StarRating } from "@/assets";
import clsx from "clsx";
import { Quote } from "lucide-react";
import Slider, { Settings } from "react-slick";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  verticalSwiping: true,
  centerMode: true,
  centerPadding: "0px",

  responsive: [
    {
      breakpoint: 1024, // Screens <= 1024px (e.g., tablets)
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // Screens <= 768px (e.g., mobile landscape)
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // Screens <= 480px (e.g., mobile portrait)
      settings: {
        slidesToShow: 1,
      },
    },
  ],

  appendDots: (dots: React.ReactElement[]) => (
    <div>
      {dots?.map((dot: React.ReactElement, index: number) => {
        const el = dot as React.ReactElement<{
          className: string;
          children: React.ReactElement<{ onClick: () => void }>;
        }>;

        return (
          <button
            key={index}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",

              backgroundColor: el.props.className.includes("slick-active")
                ? "#ff007f"
                : "transparent", // Dynamic color
              cursor: "pointer",
              borderColor: el.props.className.includes("slick-active")
                ? "transparent"
                : "#ff007f",
              fontSize: 0, // Hide default content
              margin: "0px 5px",
              color: el.props.className.includes("slick-active")
                ? "#ff007f"
                : "#ccc",
            }}
            onClick={el.props.children.props.onClick} // Preserve original click handler
          ></button>
        );
      })}
    </div>
  ),
};

const SeactionThree = () => {
  return (
    <div className="bg-pinkDark max-w-full mb-8">
      <div className="container mx-auto w-full flex items-center">
        <Slider {...settings} className="max-w-full">
          {childDifference?.map((ele, index) => (
            <div
              key={index}
              className="relative hover:bg-[url('@/assets/square-hover.png')] bg-[url('@/assets/square.png')] flex justify-center items-center flex-col min-h-[400px] px-7 py-32 gap-3"
            >
              <h3 className="font-bold">{ele?.name}</h3>
              <p className="text-xs text-gray-500">{ele?.role}</p>
              <div className="flex items-center gap-1 justify-center">
                {Array.from({ length: ele?.rating }).map((_, index) => (
                  <StarRating key={index} />
                ))}
              </div>
              <p className="text-gray-500 mt-5">{ele?.testimonial}</p>
              <div
                className={clsx(
                  "rounded-full  p-4 absolute top-44 left-0",
                  index % 2 == 0 ? "bg-[#34D399]" : "bg-blue_400"
                )}
              >
                <Quote className="text-white" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SeactionThree;

const childDifference = [
  {
    name: "Ahmed Fouad",
    role: "Parent",
    rating: 5,
    testimonial:
      "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    name: "Kareem Nagy",
    role: "Little Leader",
    rating: 5,
    testimonial:
      "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    name: "Asmaa Yasser",
    role: "Parent",
    rating: 5,
    testimonial:
      "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
];
