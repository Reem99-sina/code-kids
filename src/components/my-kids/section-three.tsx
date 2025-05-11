import { Button } from "../common/button.component";

const SectionThree = () => {
  return (
    <div className=" bg-white  min-h-max relative">
      <div className="bg-[url('/browser.png')] bg-cover bg-no-repeat min-h-[427px] flex flex-col items-center justify-center gap-4">
        <div className="container mx-auto  md:max-w-[841px] max-w-full">
          <h3 className="text-4xl font-black text-[#001D1D]">
            Want to boost your child’s progress? Explore new skills now!
          </h3>
        </div>
        <Button
          text="Browse Courses"
          className="!rounded-full !w-auto !px-6 !text-base !text-blackPurple"
        />
      </div>
    </div>
  );
};

export default SectionThree;
