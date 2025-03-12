import {
  American,
  Applepay,
  CC,
  FacebookFooter,
  InstagremFooter,
  Visa,
} from "@/assets";

const links = [
  {
    title: "Home",
  },
  {
    title: "About Us",
  },
  {
    title: "Courses",
  },
  {
    title: "Our Teachers",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Terms of Use",
  },
];

const ContentFooter = () => {
  return (
    <div className="bg-[url('/bg-footer.png')] bg-center bg-cover w-full min-h-[663px] px-16 h-full flex items-end justify-start">
      <div className=" w-full">
        <div className="flex items-center gap-24 text-white text-start mt-16">
          <div className=" flex flex-col max-w-[420px] gap-2">
            <h3 className="text-4xl">Logo</h3>
            <p className="text-xl font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className="flex items-center gap-2">
              <FacebookFooter />
              <InstagremFooter />
            </div>
          </div>
          <div className=" flex flex-col max-w-[420px] gap-2">
            <h3 className="text-2xl text-yellowThree">Pages</h3>
            {links?.map((ele, index) => (
              <p className="text-xl font-black" key={index}>
                {ele?.title}
              </p>
            ))}
          </div>
          <div className=" flex flex-col max-w-[420px] gap-2">
            <h3 className="text-2xl text-yellowThree">Help</h3>

            <p className="text-xl font-black">FAQs`</p>
            <p className="text-xl font-black">Contact Us</p>
          </div>
        </div>
        <div className="flex items-center justify-between  text-white text-start text-lg pt-10 pb-16">
          <p>© 2025. Pure hug</p>
          <div className="flex items-center gap-3">
            <CC />
            <American />
            <Visa />
            <Applepay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFooter;
