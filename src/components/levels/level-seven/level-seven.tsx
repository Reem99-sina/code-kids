import { HomeIcon } from "@/assets";
import { Modal, ModalRef } from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import { useEffect, useMemo, useRef, useState } from "react";
import { LevelComplete } from "../LevelComplete";
import { Button } from "@/components/common/button.component";

import { FormProvider, useForm } from "react-hook-form";
import { generateRandomDec } from "@/utils/binary.util";
import InterInput from "../level-five/inter-input";

const LevelSeven = ({
  onComplete,
  goHome,
}: {
  onComplete: () => void;
  goHome: () => void;
}) => {
  // const [conductorPressed, setConductorPressed] = useState(false);
  // const [semiconductorPressed, setSemiconductorPressed] = useState(false);
  // const [insulatorPressed, setInsulatorPressed] = useState(false);
  // const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const formData = useForm();
  const binary = formData.watch("binary");

  const modalRef = useRef<ModalRef>(null);

  const { randomDecimal, binaryString } = useMemo(
    () => generateRandomDec({ length: level * 4, DecNumber: Math.random() }),
    [level]
  );

  // useEffect(() => {
  //   const activeCount =
  //     Number(conductorPressed) +
  //     Number(semiconductorPressed) +
  //     Number(insulatorPressed);

  //   const newProgress = Math.round((activeCount / 3) * 100);
  //   setProgress(newProgress);

  //   if (newProgress === 100 && answer === "101") {
  //     modalRef.current?.open();
  //   }
  // }, [conductorPressed, semiconductorPressed, insulatorPressed, answer]);

  const handleCheckAnswer = () => {
    if (binaryString == binary) {
      setLevel((prev) => prev + 1);
      formData.setValue("binary","")
    }
    // if (answer === "101") {
    //   modalRef.current?.open();
    // }
  };

  useEffect(() => {
    if (level == 4) {
      modalRef.current?.open();
    }
  }, [level]);

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex justify-start">
        <p className="font-bold text-3xl text-white">Coding for Kids </p>
      </div>

      <div className="flex flex-col items-center min-h-[524px] gap-4 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl text-[#0E0226] font-bold">
          Convert this hexadecimal number:
        </h2>
        <p className="font-bold text-5xl text-[#FF1D92]">
          {randomDecimal?.toString(16).toUpperCase()}
        </p>
        <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
        <div className="flex w-[80%]">
          <ProgressBar progress={0} />
        </div>
        <div className="min-w-[894px] min-h-[182px] flex items-center flex-col bg-[#FFE5F3] gap-2 rounded-lg">
          <div className="pt-6">
            <p className="font-bold text-sm text-[#0E0226]">
              Enter binary value:
            </p>
            <div className="my-2">
              <FormProvider {...formData}>
                <InterInput
                  level={binaryString?.length}
                  nameOfForm={"binary"}
                />
              </FormProvider>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-10 mb-2">
            <Button
              text="Back to Home"
              className="!max-w-[220px] !rounded-[50px] gap-2"
              startIcon={<HomeIcon />}
              onClick={goHome}
            />
            <Button
              text="Check Answer"
              className="!max-w-[220px] !rounded-[50px]"
              onClick={handleCheckAnswer}
            />
          </div>
        </div>
        <Modal ref={modalRef}>
          <LevelComplete level="6" onNextLevel={onComplete} onGoHome={goHome} />
        </Modal>
      </div>
    </div>
  );
};

export default LevelSeven;
