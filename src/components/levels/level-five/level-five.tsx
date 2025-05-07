import { HomeIcon } from "@/assets";
import { Modal, ModalRef } from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import { useEffect, useMemo, useRef, useState } from "react";
import { LevelComplete } from "../LevelComplete";
import { Button } from "@/components/common/button.component";
import { TextInput } from "@/components/common/form/text-input.component";
import { generateRandomDec } from "@/utils/binary.util";
import { FormProvider, useForm } from "react-hook-form";
import InterInput from "./inter-input";

import CommonModal from "@/components/common/common-modal";
import toast from "react-hot-toast";

interface LevelFiveProps {
  onComplete: () => void;
  goHome: () => void;
  open: boolean;
}

export const LevelFive: React.FC<LevelFiveProps> = ({
  onComplete,
  goHome,
  open,
}) => {
  const modalRef = useRef<ModalRef>(null);
  const refModal = useRef<ModalRef>(null);

  const [level, setLevel] = useState(1);

  const formData = useForm();
  const transistor = formData.watch("transistors");
  const binary = formData.watch("binary");

  const { randomDecimal, binaryString } = useMemo(
    () => generateRandomDec({ length: level + 1, DecNumber: Math.random() }),
    [level]
  );

  const handleCheckAnswer = () => {
    const lastIndex = binaryString?.split("")?.reverse()?.lastIndexOf("1");
    const numOfTransitor = lastIndex == -1 ? 0 + 1 : lastIndex + 1;

    if (binaryString == binary && transistor == numOfTransitor) {
      setLevel((prev) => prev + 1);
      formData?.setValue("binary", "");
      formData?.setValue("transistors", "");
    } else {
      toast.error(
        `Try again!\nCorrect : ${binaryString}\nCorrect transistor num: ${numOfTransitor}`
      );
    }
  };
  useEffect(() => {
    if (level == 4) {
      modalRef.current?.open();
    }
  }, [level]);
  useEffect(() => {
    if (open) {
      refModal?.current?.open();
    }
  }, [open]);
  useEffect(() => {
    refModal.current?.open();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="mb-4 flex justify-start">
          <p className="font-bold text-3xl text-white">Binary Fun Time! </p>
        </div>

        <div className="flex flex-col items-center min-h-[524px]  gap-4 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl text-[#0E0226] font-bold">
            Current mission:
          </h2>
          <p className="font-bold text-3xl text-[#FF1D92]">{randomDecimal}</p>
          <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
          <div className="flex w-[80%]">
            <ProgressBar progress={0} />
          </div>
          <div className="min-w-[894px] min-h-[182px] flex items-center flex-col bg-[#FFE5F3] gap-2 rounded-lg">
            <div>
              <p className="text-sm text-[#0E0226] font-bold mt-8">
                Toggle bits to create binary number
              </p>
            </div>
            <div>
              <p>Click bits to toggle (0/1)</p>
            </div>
            <div className="flex items-center gap-3 ">
              <FormProvider {...formData}>
                <InterInput
                  level={binaryString?.length}
                  nameOfForm={"binary"}
                />
              </FormProvider>
            </div>
            <div>
              <p className="font-bold text-sm text-[#0E0226]">
                How many transistors are needed to represent this number?
              </p>
              <div className="my-2">
                <TextInput
                  inputProps={{
                    placeholder: "Type your answer here",
                    ...formData.register("transistors"),
                  }}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-10 mb-5">
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
              level="5"
              onNextLevel={onComplete}
              onGoHome={goHome}
            />
          </Modal>
        </div>
      </div>
      <CommonModal refModal={refModal} title={"Teach Course"}>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://codeforkids-project.s3.us-east-1.amazonaws.com/static/Video+5+Decimal+to+Binary+Blastoff.mp4`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CommonModal>
    </>
  );
};
