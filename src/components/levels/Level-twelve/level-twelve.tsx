import {Arrow, HelpIcon} from "@/assets";
import {Button} from "@/components/common/button.component";
import GatComponent from "@/components/common/level-twelvec-component";
import { Modal, ModalRef } from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import {HomeIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import { LevelComplete } from "../LevelComplete";

interface LevelTwelveProps {
  onComplete: () => void;
  goHome: () => void;
}

export const LevelTwelve = ({onComplete, goHome}: LevelTwelveProps) => {
  const [progress, setProgress] = useState(0);
  const [lightOfButtonOne, setLightOfButtonOne] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [lightOfButtonTwo, setLightOfButtonTwo] = useState([false, false]);
  const modalRef = useRef<ModalRef>(null);

  function onClickLightMe(index: number) {
    const update = [...lightOfButtonOne];
    update[index] = !update[index];
    setLightOfButtonOne([...update]);
  }
  function onClickLightMeToo(index: number) {
    const update = [...lightOfButtonTwo];
    update[index] = !update[index];
    setLightOfButtonTwo([...update]);
  }

  useEffect(()=>{

    const result =
    Number(lightOfButtonOne[0]) +
    Number(lightOfButtonOne[1] ) +
    Number(lightOfButtonOne[2]&&lightOfButtonTwo[0]) +
    Number(lightOfButtonOne[3]||lightOfButtonTwo[1]);
    const newProgress = Math.round((result / 4) * 100);

    setProgress(newProgress);
    if (newProgress === 100) {
      modalRef.current?.open();
    }

  },[lightOfButtonOne,lightOfButtonTwo])
  

  return (
    <div className="flex flex-col bg-white rounded justify-center items-center rounded-xl min-h-[500px] relative   ">
      <div className="flex flex-col justify-center w-[100%]">
        <div className="mb-4 flex justify-center m-3">
          <p className=" font-bold text-3xl text-black ">Circuit Adventure </p>
        </div>
        <div className="flex flex-col items-center justify-center mx-12 p-5 m-3">
          <p>Your Progress</p>
          <div className="w-3/4">
            <ProgressBar progress={progress} />
          </div>
        </div>

        <div className="flex   items-center justify-center  flex-wrap p-5">
          <GatComponent
            pushedOne={lightOfButtonOne[0]}
            clickedOn1={() => onClickLightMe(0)}
            startIcon={<Arrow />}
            action="Press the button to light the bulb"
            gateName="Light Me Up"
            onOffLight={lightOfButtonOne[0]}
            andOrGate={false}
          />
          <GatComponent
            pushedOne={lightOfButtonOne[1]}
            clickedOn1={() => onClickLightMe(1)}
            startIcon={<Arrow />}
            action="Make the light do the opposite!"
            gateName="NOt Gate!"
            onOffLight={lightOfButtonOne[1]}
            andOrGate={false}
          />{" "}
          <GatComponent
            pushedOne={lightOfButtonOne[2]}
            pushedTwo={lightOfButtonTwo[0]}
            clickedOn1={() => onClickLightMe(2)}
            clickedOn2={() => onClickLightMeToo(0)}
            startIcon={<Arrow />}
            action="Press both buttons together!"
            gateName="And Gate!"
            onOffLight={lightOfButtonOne[2] && lightOfButtonTwo[0]}
            andOrGate={true}
          />{" "}
          <GatComponent
            pushedOne={lightOfButtonOne[3]}
            pushedTwo={lightOfButtonTwo[1]}
            clickedOn1={() => onClickLightMe(3)}
            clickedOn2={() => onClickLightMeToo(1)}
            startIcon={<Arrow />}
            action="Press any button to light up!"
            gateName="Or Gate!"
            onOffLight={lightOfButtonOne[3] || lightOfButtonTwo[1]}
            andOrGate={true}
          />
        </div>

        <div className="flex w-full items-center justify-center gap-10 m-5 p-5">
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
                  <LevelComplete onNextLevel={onComplete} onGoHome={goHome} level={""} />
                </Modal>
      </div>
      <div className="absolute  bottom-0 right-0 h-48">
        <HelpIcon />
      </div>
    </div>
    
  );
};
