import {
  LightIcon,
  Vector,
  Ground,
  HorizontalLine,
  HelpIcon,
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
import {useRef, useState} from "react";
import DargedDiv from "./../../common/level-fourteen-component";

interface LevelFourteenProps {
  onComplete: () => void;
  goHome: () => void;
}

const LevelFourteen = ({onComplete, goHome}: LevelFourteenProps) => {
  const [progress, setProgress] = useState(0);
  const [appear, setAppear] = useState(false);
  const modalRef = useRef<ModalRef>(null);
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

  const getElement = ({title}: {title: string}) => {
    return tools.find((ele) => ele?.title == title)?.component;
  };

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();

    const componentType = event.dataTransfer.getData("componentType");
    const dropId = event.currentTarget.id;

    const item = getElement({title: componentType});

    if (item) {
      setComponentDrag((prev) => ({
        ...prev,
        [dropId]: [item],
      }));
    }

    if (dropId == "top") {
      if (componentType === "Button") {
        if (!correctStates.top) {
          setProgress((prv) => prv + 15);
          setCorrectStates((prev) => ({...prev, top: true}));
        }
      } else {
        if (correctStates.top) {
          setProgress((prv) => prv - 15);
          setCorrectStates((prev) => ({...prev, top: false}));
        }
      }
    } else if (dropId == "bottom") {
      if (componentType === "Ground") {
        if (!correctStates.bottom) {
          setProgress((prv) => prv + 15);
          setCorrectStates((prev) => ({...prev, bottom: true}));
        }
      } else {
        if (correctStates.bottom) {
          setProgress((prv) => prv - 15);
          setCorrectStates((prev) => ({...prev, bottom: false}));
        }
      }
    } else if (dropId == "centerTop") {
      if (componentType === "Transistor") {
        if (!correctStates.centerTop) {
          setProgress((prv) => prv + 15);
          setCorrectStates((prev) => ({...prev, centerTop: true}));
        }
      } else {
        if (correctStates.centerTop) {
          setProgress((prv) => prv - 15);
          setCorrectStates((prev) => ({...prev, centerTop: false}));
        }
      }
    } else if (dropId == "centerBottom") {
      if (componentType === "Transistor") {
        if (!correctStates.centerBottom) {
          setProgress((prv) => prv + 10);
          setCorrectStates((prev) => ({...prev, centerBottom: true}));
        }
      } else {
        if (correctStates.centerBottom) {
          setProgress((prv) => prv - 10);
          setCorrectStates((prev) => ({...prev, centerBottom: false}));
        }
      }
    } else if (dropId == "right") {
      if (componentType === "LED") {
        if (!correctStates.right) {
          setProgress((prv) => prv + 15);
          setCorrectStates((prev) => ({...prev, right: true}));
        }
      } else {
        if (correctStates.right) {
          setProgress((prv) => prv - 15);
          setCorrectStates((prev) => ({...prev, right: false}));
        }
      }
    } else if (dropId == "leftTop") {
      if (componentType === "Battery") {
        if (!correctStates.leftTop) {
          setProgress((prv) => prv + 15);
          setCorrectStates((prev) => ({...prev, leftTop: true}));
        }
      } else {
        if (correctStates.leftTop) {
          setProgress((prv) => prv - 15);
          setCorrectStates((prev) => ({...prev, leftTop: false}));
        }
      }
    } else if (dropId == "leftBottom") {
      if (componentType === "Battery") {
        if (!correctStates.leftBottom) {
          setProgress((prv) => prv + 15);
          setCorrectStates((prev) => ({...prev, leftBottom: true}));
        }
      } else {
        if (correctStates.leftBottom) {
          setProgress((prv) => prv - 15);
          setCorrectStates((prev) => ({...prev, leftBottom: false}));
        }
      }
    }
  };

  const onDrag = ({e, component}: {e: React.DragEvent; component: string}) => {
    e.dataTransfer.setData("componentType", String(component));
  };

  React.useEffect(() => {
    if (progress >= 100) {
      modalRef.current?.open();
    }
  }, [componentDrag, progress]);

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
        <div className="w-[90%]  m-5 p-2 flex flex-col bg-white rounded justify-center items-center rounded-xl ">
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
        <div className="absolute  bottom-0 right-0 h-48">
          <HelpIcon />
        </div>
      </div>
    </>
  );
};

export default LevelFourteen;
