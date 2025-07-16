import {HomeIcon} from "@/assets";
import {Modal, ModalRef} from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import {useEffect, useMemo, useRef, useState} from "react";
import {LevelComplete} from "../LevelComplete";
import {Button} from "@/components/common/button.component";

import {FormProvider, useForm} from "react-hook-form";
import {generateRandomDec} from "@/utils/binary.util";
import InterInput from "../level-five/inter-input";
import toast from "react-hot-toast";
import CommonModal from "@/components/common/common-modal";
import HelpME from "@/components/common/help.me";

interface Props {
  onComplete: () => void;
  goHome: () => void;
  open: boolean;
  hint: string;
  source: string;
}
const LevelSeven = ({onComplete, goHome, open, hint, source}: Props) => {
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const formData = useForm();
  const binary = formData.watch("binary");
  const modalHintRef = useRef<ModalRef>(null);
  const refModal = useRef<ModalRef>(null);
  const [answer, setAnswer] = useState(false);
  const modalRef = useRef<ModalRef>(null);

  const {randomDecimal, binaryString} = useMemo(
    () => generateRandomDec({length: level * 4, DecNumber: Math.random()}),
    [level]
  );

  const handleCheckAnswer = () => {
    if (binaryString == binary) {
      setLevel((prev) => (prev < 5 ? prev + 1 : 5));
      setProgress((prev) => (prev < 100 && prev + 25 <= 100 ? prev + 25 : 100));

      formData.setValue("binary", Array(binaryString?.length + 4).fill(0));
    } else {
      toast.error(`Try again!\nCorrect : ${binaryString}`);
    }
    // if (answer === "101") {
    //   modalRef.current?.open();
    // }
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
    // refModal?.current?.open();
    modalHintRef?.current?.close();
  }, []);

  useEffect(() => {
    if (level == 5) {
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
          <ProgressBar progress={progress} />
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
          <LevelComplete
            level="7"
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
          solution={` ANswer is : ${binaryString}`}
        />
      </div>
    </div>
  );
};

export default LevelSeven;
