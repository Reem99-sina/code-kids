import { HelpIcon } from "@/assets";

const HelpIconComponent = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="absolute  -bottom-[2rem] right-0 ">
      <HelpIcon />
      <div className="absolute left-[45%] top-[5%]">
        <h3 className="font-bold">I can help you</h3>
        <h3
          className="underline font-black text-[#0F00BE] text-lg cursor-pointer"
          onClick={onClick}
        >
          Help Me{" "}
        </h3>
      </div>
    </div>
  );
};

export default HelpIconComponent;
