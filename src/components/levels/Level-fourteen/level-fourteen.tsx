import {
  LightIcon,
  Vector,
  Ground,
  HorizontalLine,
  OrGate,
  BoldLine,
  RandomShape,
  BatteryIcon,
  Radio,
  Battery,
  ArrowLeftIcon,
  HomeIcon,
} from "@/assets";
import {Button} from "@/components/common/button.component";
import {ModalRef, Modal} from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import TransistorComponent from "@/components/common/transistor-component";
import * as React from "react";
import {LevelComplete} from "../LevelComplete";
import {useEffect, useRef, useState} from "react";
import DargedDiv from "./../../common/level-fourteen-component";
import CommonModal from "@/components/common/common-modal";
import HelpME from "@/components/common/help.me";

interface LevelFourteenProps {
  onComplete: () => void;
  goHome: () => void;
  open: boolean;
  hint: string;
  source: string;
}

const LevelFourteen = ({
  onComplete,
  goHome,
  source,
  hint,
  open,
}: LevelFourteenProps) => {
  const [progress, setProgress] = useState(0);
  const [appear, setAppear] = useState(false);
  const modalRef = useRef<ModalRef>(null);
  const modalHintRef = useRef<ModalRef>(null);
  const [answer, setAnswer] = useState(false);
  const refModal = useRef<ModalRef>(null);
  const [correctStates, setCorrectStates] = useState({
    top: false,
    bottom: false,
    centerTop: false,
    centerBottom: false,
    right: false,
    leftTop: false,
    leftBottom: false,
  });
  const [componentDrag, setComponentDrag] = useState<{
    [id: string]: React.JSX.Element[];
  }>({});

  const tools = [
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
    {
      title: "Button",
      icon: <Vector />,
      component: <Vector className="my-3 h-[4.5rem] w-[4.5rem]" />,
    },
    {
      title: "Ground",
      icon: <Ground />,
      component: <Ground className="my-3 h-[4.5rem] w-[4.5rem]" />,
    },
  ];

  type DropId =
    | "top"
    | "bottom"
    | "centerTop"
    | "centerBottom"
    | "right"
    | "leftTop"
    | "leftBottom";

  const rules: Record<DropId, {type: string; score: number}> = {
    top: {type: "Button", score: 15},
    bottom: {type: "Ground", score: 15},
    centerTop: {type: "Transistor", score: 15},
    centerBottom: {type: "Transistor", score: 10},
    right: {type: "LED", score: 15},
    leftTop: {type: "Battery", score: 15},
    leftBottom: {type: "Battery", score: 15},
  };

  const getElement = ({title}: {title: string}) => {
    return tools.find((ele) => ele?.title === title)?.component;
  };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();

    const componentType = event.dataTransfer.getData("componentType");
    const dropId = event.currentTarget.id as DropId;

    const item = getElement({title: componentType});

    if (item) {
      setComponentDrag((prev) => ({
        ...prev,
        [dropId]: [item],
      }));
    }

    const rule = rules[dropId];
    if (!rule) return;

    const isCorrect = componentType === rule.type;

    setCorrectStates((prev) => ({...prev, [dropId]: isCorrect}));
  };
  const checkAnswer = () => {
    let score = 0;
    for (const dropId in rules) {
      const key = dropId as DropId;
      if (correctStates[key]) {
        score += rules[key].score;
      }
      setProgress(score);
      if (score == 100) modalRef.current?.open();
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
    refModal?.current?.open();
    modalHintRef?.current?.close();
  }, []);
  const onDrag = ({e, component}: {e: React.DragEvent; component: string}) => {
    e.dataTransfer.setData("componentType", String(component));
  };

  return (
    <>
      <div className="flex h-full ">
        <div className=" bg-white m-5 p-2 flex flex-col gap-4  rounded-xl m-3 ">
          {tools?.map((ele, index) => {
            return (
              <div
                draggable={true}
                onDragStart={(e) => onDrag({e, component: ele.title})}
                key={index}>
                <Button
                  className="!bg-purpleOne rounded-lg flex items-center justify-center gap-2 font-normal text-white !text-base px-6 w-[100%]"
                  text={appear ? "" : ele?.title}
                  startIcon={ele?.icon}
                />
              </div>
            );
          })}

          <div
            className="bg- py-2 rounded-full  w-[50px] absolute bottom- cursor-pointer top-1/2 transform translate-y-48 translate-x-16    "
            onClick={() => setAppear(!appear)}>
            <div className="bg-greenOne py-2 rounded-full px-3 flex ">
              <ArrowLeftIcon className="text-xl " />
            </div>
          </div>
        </div>
        <div className="w-[90%]  m-5 p-2 flex flex-col bg-white rounded justify-center items-center  ">
          <div className="flex flex-col justify-center  w-[100%]">
            <div className="mb-4 flex justify-center ">
              <p className=" font-bold text-3xl text-black ">
                Lego And Gate Builder
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mx-12 p-5 m-3">
              <p>Your Progress</p>
              <div className="w-3/4">
                <ProgressBar progress={progress} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[100%] h-full m-5 p-2 ">
            <div className="flex   justify-center bg-pink-100  w-[60%] rounded-xl items-center m-3 h-[500px] p-5 ">
              <div className="flex flex-col justify-center items-center place-content-center">
                <OrGate className="absolute transform translate-x-5 justify-center items-center  " />
                <div>
                  <HorizontalLine className=" flex items-center w-[221px]   -translate-x-[110px] translate-y-[50px] " />
                  <BoldLine className=" flex items-center w-[221px] -translate-x-[90px] translate-y-[42px] " />
                </div>
                <div>
                  <HorizontalLine className=" flex items-center w-[221px] -translate-x-[110px] -translate-y-[30px]" />
                  <BoldLine className=" flex items-center w-[221px] -translate-x-[90px]  -translate-y-[36px] " />
                </div>
                <RandomShape className="absolute translate-x-[80px]  translate-y-[10px]" />

                {/* <HorizontalLine className="absolute justify-center items-center " /> */}

                <DargedDiv
                  DashOrSolid={false}
                  className="translate-y-[140px] translate-x-[20px]"
                  Id="bottom"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={3}
                  index={componentDrag}
                />

                <DargedDiv
                  DashOrSolid={false}
                  className="transform -translate-y-[5px] translate-x-[195px]  font-bold gap-2"
                  Id="right"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={0}
                  index={componentDrag}
                />
                <DargedDiv
                  DashOrSolid={false}
                  className="-translate-y-[130px] translate-x-[100px]"
                  Id="top"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    if (!componentDrag.id) even.preventDefault();
                  }}
                  key={1}
                  index={componentDrag}
                />
                <DargedDiv
                  DashOrSolid={false}
                  className="-translate-y-[32px] translate-x-[20px]"
                  Id="centerTop"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={2}
                  index={componentDrag}
                />

                <DargedDiv
                  DashOrSolid={false}
                  className="translate-y-[38px] translate-x-[20px]"
                  Id="centerBottom"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={4}
                  index={componentDrag}
                />

                <DargedDiv
                  DashOrSolid={false}
                  className="-translate-x-[240px] -translate-y-[30px]"
                  Id="leftTop"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={5}
                  index={componentDrag}
                />

                <DargedDiv
                  DashOrSolid={false}
                  className="translate-y-[38px] -translate-x-[240px]"
                  Id="leftBottom"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={6}
                  index={componentDrag}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-10">
            <Button
              text="Back to Home"
              className="!max-w-[220px] !rounded-[50px] gap-2"
              startIcon={<HomeIcon />}
              onClick={goHome}
            />

            <Button
              onClick={checkAnswer}
              text="Check Answer"
              className="!max-w-[220px] !rounded-[50px]"
            />
          </div>
          <Modal ref={modalRef}>
            <LevelComplete
              onNextLevel={onComplete}
              onGoHome={goHome}
              level={""}
            />
          </Modal>
        </div>
        <CommonModal refModal={refModal} title={"Teach Course"}>
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={source}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </CommonModal>
        <HelpME
          setAnswer={() => setAnswer(true)}
          answer={answer}
          hint={hint}
          refModal={modalHintRef}
          solution={`  borrows  :`}
          solutionTwo={` Correct carry:`}
        />
      </div>
    </>
  );
};

export default LevelFourteen;
