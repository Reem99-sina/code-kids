import {
  ArrowLeftIcon,
  Battery,
  BatteryIcon,
  HomeIcon,
  Light,
  LightIcon,
  LightOff,
  Radio,
} from "@/assets";
import { Button } from "@/components/common/button.component";
import CardElement from "@/components/common/card-element";
import ProgressBar from "@/components/common/ProgressBar";
import TransistorComponent from "@/components/common/transistor-component";
import clsx from "clsx";
import { JSX, ReactNode, useEffect, useRef, useState } from "react";
import { Modal, ModalRef } from "@/components/common/modal.component";
import CommonModal from "@/components/common/common-modal";
import { LevelComplete } from "../LevelComplete";
import ModalReviewResult from "../Level-two/modal-review-result";

interface LevelThreeProps {
  onComplete: () => void;
  goHome: () => void;
  open: boolean;
  hint: JSX.Element;
  source: string;
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
    component: <LightOff className="my-3 h-[4.5rem] w-[4.5rem]" />,
  },
];

const LevelThree: React.FC<LevelThreeProps> = ({
  goHome,
  onComplete,
  open,
  hint,
  source,
}) => {
  const modalRef = useRef<ModalRef>(null);
  const modalResultRef = useRef<ModalRef>(null);
  const refModal = useRef<ModalRef>(null);
  const modalHintRef = useRef<ModalRef>(null);
  const [appear, setAppear] = useState(false);
  const [progress, setProgress] = useState(1);
    const [answer, setAnswer] = useState(false);

  const [componentDrag, setComponentDrag] = useState<
    Record<string, DragComProps>
  >({});
  const [message, setMessage] = useState({
    title: "",
    desc: "",
  });
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

  const onDrop = (e: React.DragEvent, dropZoneTitle: string) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData("componentType");
    const component = getElement({ title: componentType });

    if (!component) return;

    setComponentDrag((prev) => ({
      ...prev,
      [dropZoneTitle]: { title: componentType, component },
    }));
  };
  const checkLight = () => {
    const open =
      Object.keys(componentDrag)?.every(
        (key) => componentDrag[key]?.title == key
      ) && Object.keys(componentDrag)?.length == 3;
    if (open) {
      setProgress(100);
    } else {
      setMessage({
        title: "Game Over! ",
        desc: "Time ran out or incorrect sorting.",
      });
      setComponentDrag({});
      refModal?.current?.open();
    }
  };

  useEffect(() => {
    if (!modalHintRef?.current?.open()) {
      open = false;
    }
    if (open) {
      modalHintRef?.current?.open();
    }
  }, [open]);

  useEffect(() => {
    modalRef?.current?.open();
    modalHintRef?.current?.close();
  }, []);

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
          {helpTools?.map((ele) => (
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
                ele?.title == "Transistor" ? () => checkLight() : undefined
              }
              key={ele?.title}
            >
              <div
                className="w-full h-[100px] flex justify-center items-center"
                onDrop={(e) => onDrop(e, ele.title)} // 👈 حدد اسم الخانة
                onDragOver={handleDragOver}
              >
                {ele.title == "LED" && progress >= 100 ? (
                  <Light className="my-3 h-[4.5rem] w-[4.5rem]" />
                ) : (
                  componentDrag[ele.title]?.component
                )}
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
            onClick={() => {
              if (progress >= 100) {
                modalResultRef?.current?.open();
              } else {
                checkLight();
              }
            }}
          />
        </div>
      </div>

      <CommonModal refModal={modalRef} title={"Teach Course"}>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={source}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CommonModal>
      <CommonModal refModal={modalHintRef} title={"Teach Course"}>
        {
          <>
            {" "}
            {hint}
            <Button
              className={`${answer ? `bg-white` : ``}`}
              onClick={() => {
                if (!answer) {
                  const confirmed = confirm(
                    "Do you want to reveal the answer?"
                  );
                  if (confirmed) {
                    setAnswer(true);
                  }
                }
              }}
              text={"Show answer"}
            />
            {answer ? (
              <p className="text-lg text-bold">press on all the button</p>
            ) : (
              <></>
            )}
          </>
        }
      </CommonModal>
      <Modal ref={modalResultRef}>
        <LevelComplete level="3" onNextLevel={onComplete} onGoHome={goHome} />
      </Modal>
      <Modal
        ref={refModal}
        className="bg-transparent"
        // classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
        // onClose={() => navigate("/")}
      >
        <ModalReviewResult
          title={message?.title}
          desc={message?.desc}
          onClick={() => {
            refModal?.current?.close();
          }}
        />
      </Modal>
    </div>
  );
};

export default LevelThree;
