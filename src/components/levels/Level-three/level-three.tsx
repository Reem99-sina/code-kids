import {
  ArrowLeftIcon,
  Battery,
  BatteryIcon,
  HomeIcon,
  LightIcon,
  Radio,
} from "@/assets";
import { Button } from "@/components/common/button.component";
import CardElement from "@/components/common/card-element";
import ProgressBar from "@/components/common/ProgressBar";
import TransistorComponent from "@/components/common/transistor-component";
import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ModalRef } from "@/components/common/modal.component";
import CommonModal from "@/components/common/common-modal";

interface LevelThreeProps {
  onComplete: () => void;
  goHome: () => void;
  open:boolean
}

interface DragComProps {
  title: string;
  component: ReactNode;
}

const helpTools = [
  {
    title: "Battery",
    icon: <Battery />,
    component: <BatteryIcon className="my-3" />,
  },
  {
    title: "Transistor",
    icon: <Radio />,
    component: (
      <div className="flex flex-col gap-3    my-3 ">
        <TransistorComponent />
      </div>
    ),
  },
  {
    title: "LED",
    icon: <LightIcon />,
    component: <LightIcon className="my-3 h-[4.5rem] w-[4.5rem]" />,
  },
];

const LevelThree: React.FC<LevelThreeProps> = ({ goHome, onComplete ,open}) => {
  const modalRef = useRef<ModalRef>(null);

  const [appear, setAppear] = useState(false);
  const [progress, setProgress] = useState(1);
  const [componentDrag, setComponentDrag] = useState<DragComProps[]>([]);

  const onDrag = ({
    e,
    component,
  }: {
    e: React.DragEvent;
    component: string;
  }) => {
    e.dataTransfer.setData("componentType", String(component));
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault(); // Allow drop
  };

  const getElement = ({ title }: { title: string }) => {
    return helpTools.find((ele) => ele?.title == title)?.component;
  };

  const onDrop = (e: React.DragEvent) => {
    const componentType = e.dataTransfer.getData("componentType");
    setComponentDrag((prev) => [
      ...prev,
      { title: componentType, component: getElement({ title: componentType }) },
    ]);
  };

  useEffect(() => {
    modalRef?.current?.open();
  }, []);

  useEffect(() => {
    if (open) {
      modalRef?.current?.open();
    }
  }, [open]);
  
  return (
    <div className="flex items-start gap-5">
      <div className="bg-white rounded-lg py-5 px-3 flex flex-col gap-4 min-h-[600px] relative ">
        {helpTools?.map((ele) => {
          return (
            <div
              draggable={true}
              onDragStart={(e) => onDrag({ e, component: ele.title })}
              key={ele?.title}
            >
              <Button
                className="!bg-purpleOne rounded-lg flex items-center gap-2 font-normal text-white !text-base px-6"
                text={appear ? "" : ele?.title}
                startIcon={ele?.icon}
              />
            </div>
          );
        })}
        <div
          className="p-3 rounded-full bg-white absolute -right-4 bottom-20 cursor-pointer"
          onClick={() => setAppear(!appear)}
        >
          <div className="bg-greenOne py-2 rounded-full px-3">
            <ArrowLeftIcon className="text-xl " />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[600px] w-full h-full gap-4 p-6 bg-white shadow-lg rounded-lg ">
        <h2 className="text-2xl text-[#0E0226] font-bold">
          Transistor Circuit Builder
        </h2>
        <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
        <div className="flex w-[80%] mb-5">
          <ProgressBar progress={progress} />
        </div>
        <div className="flex gap-7 w-[80%]">
          {helpTools?.map((ele, index) => (
            <CardElement
              title={ele?.title}
              desc={
                ele?.title == "Transistor" ? "NPN Transistor Construction" : ""
              }
              className={clsx(
                ele?.title == "Transistor" ? "flex-1" : "flex-[0.5]"
              )}
              buttonText={ele?.title == "Transistor" ? "Power" : undefined}
              onButtonClick={
                ele?.title == "Transistor" ? () => setProgress(100) : undefined
              }
              key={ele?.title}
            >
              <div
                className="w-full h-[100px] flex justify-center items-center"
                onDrop={onDrop}
                onDragOver={handleDragOver}
              >
                {componentDrag[index]?.component}
              </div>
            </CardElement>
          ))}
        </div>
        <div className="flex w-full items-end justify-center gap-10 mt-auto">
          <Button
            text="Back to Home"
            className="!max-w-[220px] !rounded-[50px] gap-2"
            startIcon={<HomeIcon />}
            onClick={goHome}
          />
          <Button
            text="Check Answer"
            className="!max-w-[220px] !rounded-[50px]"
            onClick={onComplete}
          />
        </div>
      </div>
     
      <CommonModal refModal={modalRef} title={"Teach Course"}>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://codeforkids-project.s3.us-east-1.amazonaws.com/static/Video+3+Transistor+Circuit+Builder.mp4`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CommonModal>
    </div>
  );
};

export default LevelThree;
