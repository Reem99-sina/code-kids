import ProgressBar from "@/components/common/ProgressBar";
import {useEffect, useRef, useState} from "react";
import {Button} from "./../../common/button.component";
import {
  ArrowLeftIcon,
  Battery,
  BatteryIcon,
  Diode,
  Ellipse,
  Ground,
  HelpIcon,
  HomeIcon,
  HorizontalLine,
  LightIcon,
  Radio,
  Vector,
  VerticalLine,
} from "@/assets";
import TransistorComponent from "@/components/common/transistor-component";
import {} from "react";
import {JSX} from "react/jsx-runtime";
import {Modal, ModalRef} from "@/components/common/modal.component";
import {LevelComplete} from "../LevelComplete";
import DargedDiv from "@/components/common/level-fourteen-component";

interface LevelThirteenProps {
  onComplete: () => void;
  goHome: () => void;
}
const LEvelThirteen = ({onComplete, goHome}: LevelThirteenProps) => {
  const [progress, setProgress] = useState(0);
  const [appear, setAppear] = useState(false);
  const modalRef = useRef<ModalRef>(null);
  const [correctStates, setCorrectStates] = useState({
    top: false,
    bottom: false,
    center: false,
    right: false,
    left: false,
  });
  const [componentDrag, setComponentDrag] = useState<{
    [id: string]: JSX.Element[];
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
          setProgress((prv) => prv + 20);
          setCorrectStates((prev) => ({...prev, top: true}));
        }
      } else {
        if (correctStates.top) {
          setProgress((prv) => prv - 20);
          setCorrectStates((prev) => ({...prev, top: false}));
        }
      }
    } else if (dropId == "bottom") {
      if (componentType === "Ground") {
        if (!correctStates.bottom) {
          setProgress((prv) => prv + 20);
          setCorrectStates((prev) => ({...prev, bottom: true}));
        }
      } else {
        if (correctStates.bottom) {
          setProgress((prv) => prv - 20);
          setCorrectStates((prev) => ({...prev, bottom: false}));
        }
      }
    } else if (dropId == "center") {
      if (componentType === "Transistor") {
        if (!correctStates.center) {
          setProgress((prv) => prv + 20);
          setCorrectStates((prev) => ({...prev, center: true}));
        }
      } else {
        if (correctStates.center) {
          setProgress((prv) => prv - 20);
          setCorrectStates((prev) => ({...prev, center: false}));
        }
      }
    } else if (dropId == "right") {
      if (componentType === "LED") {
        if (!correctStates.right) {
          setProgress((prv) => prv + 20);
          setCorrectStates((prev) => ({...prev, right: true}));
        }
      } else {
        if (correctStates.right) {
          setProgress((prv) => prv - 20);
          setCorrectStates((prev) => ({...prev, right: false}));
        }
      }
    } else if (dropId == "left") {
      if (componentType === "Battery") {
        if (!correctStates.left) {
          setProgress((prv) => prv + 20);
          setCorrectStates((prev) => ({...prev, left: true}));
        }
      } else {
        if (correctStates.left) {
          setProgress((prv) => prv - 20);
          setCorrectStates((prev) => ({...prev, left: false}));
        }
      }
    }
  };

  const onDrag = ({e, component}: {e: React.DragEvent; component: string}) => {
    e.dataTransfer.setData("componentType", String(component));
  };

  useEffect(() => {
    if (progress === 100) {
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
              <div className="flex justify-center items-center">
                <Diode className="absolute transform translate-x-5 justify-center items-center  " />

                <HorizontalLine className="absolute justify-center items-center " />

                <VerticalLine className="absolute justify-center items-center h-80 " />

                <DargedDiv
                  className="transform translate-y-36   w-[150px] h-[100px]"
                  Id="bottom"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={0}
                  index={componentDrag}
                />

                <DargedDiv
                  className="transform -translate-y-36  w-[150px] h-[100px]"
                  Id="top"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    if (!componentDrag.centerTop) even.preventDefault();
                  }}
                  key={1}
                  index={componentDrag}
                />

                <DargedDiv
                  className="transform translate-x-52  w-[150px] h-[100px]"
                  Id="right"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={2}
                  index={componentDrag}
                />

                <DargedDiv
                  className="w-[150px] h-[60px]"
                  Id="center"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={3}
                  index={componentDrag}
                />

                <DargedDiv
                  className=" transform -translate-x-60 font-bold w-[150px] h-[60px] "
                  Id="left"
                  Drop={(ev) => onDrop(ev)}
                  DragOver={(even) => {
                    even.preventDefault();
                  }}
                  key={4}
                  index={componentDrag}
                />
              </div>

              <Ellipse className="relative left-24 " />
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
export default LEvelThirteen;
