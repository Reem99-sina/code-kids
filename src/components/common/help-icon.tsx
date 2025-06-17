import { ChildRight  } from "@/assets";


const HelpIconComponent = ({ onClick }: { onClick?: () => void }) => {


  return (
    <div className="absolute  -bottom-[2rem] right-0 group transition-all duration-75">
      <ChildRight className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
      <div className=" transition-all duration-500 ease-in-out absolute left-0 top-[22%] group-hover:-top-[30%] bg-[url('@/assets/cloud.png')] bg-cover w-[170px] h-[150px] flex flex-col items-center justify-center">
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
