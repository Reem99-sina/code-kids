import { HomeIcon } from "@/assets";
import { Modal, ModalRef } from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import {  useEffect, useMemo, useRef, useState } from "react";
import { LevelComplete } from "../LevelComplete";
import { Button } from "@/components/common/button.component";
import { TextInput } from "@/components/common/form/text-input.component";
import CommonModal from "@/components/common/common-modal";
import { useForm } from "react-hook-form";
import { generateRandomDec } from "@/utils/binary.util";
import toast from "react-hot-toast";
import HelpME from "@/components/common/help.me";

interface LevelFourProps {
  onComplete: () => void;
  goHome: () => void;
  open: boolean;
  hint: string;
  source: string;
}

export const LevelFour: React.FC<LevelFourProps> = ({
  onComplete,
  goHome,
  open,
  hint,
  source,
}) => {
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [result, setResult] = useState(false);

  const formData = useForm();
  const decimal = formData.watch("decimal");
  const modalHintRef = useRef<ModalRef>(null);

  const modalRef = useRef<ModalRef>(null);
  const refModal = useRef<ModalRef>(null);

  const { randomDecimal, binaryString } = useMemo(
    () => generateRandomDec({ length: level * 4, DecNumber: Math.random() }),
    [level]
  );

  const handleCheckAnswer = () => {
    if (randomDecimal == decimal) {
      setLevel((prev) => prev + 1);
      setProgress((prev) => (prev < 100 && prev + 25 <= 100 ? prev + 25 : 100));

      formData.setValue("decimal", "");
    } else {
      toast.error(`Try again!\nCorrect : ${randomDecimal}`);
    }
    // if (answer === "101") {
    //   modalRef.current?.open();
    // }
  };

  useEffect(() => {
    if (level == 5) {
      modalRef.current?.open();
    }
  }, [level]);

  useEffect(() => {
    if (!modalHintRef?.current?.open()) {
      open = false;
    }
    if (open) {
      modalHintRef?.current?.open();
    }
  }, [open]);

  useEffect(() => {
    // refModal?.current?.open();
    modalHintRef?.current?.close();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex justify-start">
        <p className="font-bold text-3xl text-white">Binary Fun Time! </p>
      </div>
      <div className="flex flex-col items-center min-h-[524px] gap-4 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl text-[#0E0226] font-bold">
          Convert this binary number:
        </h2>
        <p className="font-bold text-5xl text-[#FF1D92]">{binaryString}</p>
        <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
        <div className="flex w-[80%]">
          <ProgressBar progress={progress} />
        </div>
        <div className="min-w-[894px] min-h-[182px] flex items-center flex-col bg-[#FFE5F3] gap-2 rounded-lg">
          <div className="pt-5">
            <p className="font-bold text-sm text-[#0E0226]">
              Enter decimal value
            </p>
            <div className="my-2">
              <TextInput
                inputProps={{
                  placeholder: "Type your answer here",
                  ...formData?.register("decimal"),
                }}
              />
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
          <LevelComplete
            level="4"
            onNextLevel={() => {
              if (progress >= 100) {
                onComplete();
              } else {
                modalRef?.current?.open();
              }
            }}
            onGoHome={goHome}
          />
        </Modal>
      </div>
      <CommonModal refModal={refModal} title={"Teach Course"}>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={source}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CommonModal>{" "}
              <HelpME setAnswer={() => setResult(true)} answer={result} hint={hint} refModal={modalHintRef} solution={""}/>

    </div>
  );
};
