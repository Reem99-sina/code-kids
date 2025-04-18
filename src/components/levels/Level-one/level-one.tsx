import { BatteryIconB, HelpIcon, HomeIcon, Light, LightOff } from "@/assets";
import { Modal, ModalRef } from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import { TransmitCard } from "@/components/common/transmit-card";
import { useEffect, useRef, useState } from "react";
import { LevelComplete } from "../LevelComplete";
import { Button } from "@/components/common/button.component";

interface LevelOneProps {
  onComplete: () => void;
  goHome: () => void;
}

export const LevelOne: React.FC<LevelOneProps> = ({ onComplete, goHome }) => {
  const [conductorPressed, setConductorPressed] = useState(false);
  const [semiconductorPressed, setSemiconductorPressed] = useState(false);
  const [insulatorPressed, setInsulatorPressed] = useState(false);
  const [progress, setProgress] = useState(0);
  const modalRef = useRef<ModalRef>(null);

  useEffect(() => {
    const activeCount =
      Number(conductorPressed) +
      Number(semiconductorPressed) +
      Number(insulatorPressed);

    const newProgress = Math.round((activeCount / 3) * 100);
    setProgress(newProgress);

    if (newProgress === 100) {
      modalRef.current?.open();
    }
  }, [conductorPressed, semiconductorPressed, insulatorPressed]);

  return (
    <>
      <div className="flex flex-col">
        <div className="mb-4 flex justify-start">
          <p className="font-bold text-3xl text-white">
            Material Conductivity!
          </p>
        </div>

        <div className="flex flex-col items-center max-h-[524px] max-w-[1161px] gap-4 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-[#0E0226] font-bold">
            Material Conductivity
          </h2>
          <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
          <div className="flex w-[80%]">
            <ProgressBar progress={progress} />
          </div>
          <div className="flex gap-2">
            <TransmitCard
              title="Conductor"
              icons={[
                { icon: <BatteryIconB />, label: "Battery" },
                { icon: <Light />, label: "Light" },
              ]}
              buttonText={!conductorPressed ? "Power" : "Power on"}
              onButtonClick={() => setConductorPressed((prev) => !prev)}
            />

            <TransmitCard
              title="Semiconductor"
              icons={[
                { icon: <BatteryIconB />, label: "Battery" },
                {
                  icon: semiconductorPressed ? <Light /> : <LightOff />,
                  label: "Light",
                },
              ]}
              buttonText={!semiconductorPressed ? "Power" : "Power on"}
              onButtonClick={() => setSemiconductorPressed((prev) => !prev)}
              conductorColor="#3426DA"
            />

            <TransmitCard
              title="Insulator"
              icons={[
                { icon: <BatteryIconB />, label: "Battery" },
                { icon: <Light />, label: "Light" },
              ]}
              buttonText={!insulatorPressed ? "Power" : "Power on"}
              onButtonClick={() => setInsulatorPressed((prev) => !prev)}
              conductorColor="#1DA663"
            />
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
            <LevelComplete onNextLevel={onComplete} onGoHome={goHome} />
          </Modal>
        </div>
        <div className="absolute  bottom-8 right-0">
          <HelpIcon />
        </div>
      </div>
    </>
  );
};
