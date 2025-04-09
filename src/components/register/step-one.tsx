import { ChildRegister, Parent } from "@/assets";
import CommenSide from "./commen-side";
import { FC } from "react";


interface props {
  onChange: (value: string) => void;
}

const StepOne: FC<props> = ({ onChange }) => {
  return (
    <>
      <CommenSide
        title="Welcome!"
        desc=" To get started, tell us who you are:"
      />
      <div className=" flex items-center gap-28">
        <div
          className="flex flex-col gap-4 cursor-pointer"
          onClick={() => onChange("child")}
        >
          <div className="bg-white rounded-[20px] border-binkOne hover:border-2 hover:shadow-[-3px_-3px_25px_0px_#FF0084]">
            <ChildRegister />
          </div>
          <p className="font-black text-[2rem]  text-white">I’m a Child</p>
        </div>
        <div
          className="flex flex-col gap-4 cursor-pointer"
          onClick={() => onChange("parent")}
        >
          <div className="bg-white rounded-[20px]   hover:border-2 hover:shadow-[0px_-3px_25px_0px_#06060629] border-[#F8F8F8]">
            <Parent />
          </div>
          <p className="font-black text-[2rem]  text-white">I’m a Parent</p>
        </div>
      </div>
    </>
  );
};

export default StepOne;
