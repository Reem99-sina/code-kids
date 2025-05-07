import {ArrowRight, BatteryIcon, Light, LightOff} from "@/assets";
import {JSX} from "react";
import {Button} from "./button.component";

interface Props {
  gateName: string;
  action: string;
  startIcon: JSX.Element;
  onOffLight: boolean;
  andOrGate: boolean;
  pushedOne?:boolean;
  pushedTwo?:boolean;
  clickedOn1:()=>void;
  clickedOn2?:()=>void


}

const GatComponent = ({
  gateName,
  action,
  startIcon,
  onOffLight,
  andOrGate,
  clickedOn1,
  clickedOn2,
  pushedOne,pushedTwo
}: Props) => {
  return (
    <>
      <div className="bg-[#FFE5F3] flex flex-col p-5 text-start  m-2">
        <p className="font-bold flex items-center">
          {startIcon}
          {gateName}
        </p>
        <p className="opacity-50">{action}</p>
        <div className="flex  items-center gap-x-1">
          <BatteryIcon />

          {andOrGate == true ? (
            <div className="flex items-center gap-x-1">
              <Button onClick={clickedOn1} className={`bg-${pushedOne?``:`[#FF1D92]`} rounded-xl w-[5%] `}  text="" />
              <Button onClick={clickedOn2} className={`bg-${pushedTwo?``:`[#FF1D92]`} rounded-xl w-[5%] `}  text="" />
              <ArrowRight />
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <ArrowRight />
              <Button onClick={clickedOn1} className={`bg-${pushedOne?`green`:`[#FF1D92]`} rounded-xl w-[5%]`}  text="" />
              <ArrowRight />
            </div>
          )}

          {onOffLight == true ? <Light /> : <LightOff />}
        </div>
      </div>{" "}
    </>
  );
};

export default GatComponent;
