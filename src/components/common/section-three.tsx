import { Button } from "./button.component";

const SectionThree = ({
  title,
  title_button,
}: {
  title: string;
  title_button?: string;
}) => {
  return (
    <div className=" bg-white  min-h-max relative">
      <div className="bg-[url('/browser.png')] bg-cover bg-no-repeat min-h-[427px] flex flex-col items-center justify-center gap-4">
        <div className="container mx-auto  md:max-w-[841px] max-w-full">
          <h3 className="text-4xl font-black text-[#001D1D]">{title}</h3>
        </div>
        {title_button && (
          <Button
            text={title_button}
            className="!rounded-full !w-auto !px-6 !text-base !text-blackPurple"
          />
        )}
      </div>
    </div>
  );
};

export default SectionThree;
