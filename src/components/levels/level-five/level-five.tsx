import { HelpIcon, HomeIcon } from "@/assets";
import { Modal, ModalRef } from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import { useRef, useState } from "react";
import { LevelComplete } from "../LevelComplete";
import { Button } from "@/components/common/button.component";
import { TextInput } from "@/components/common/form/text-input.component";

interface LevelFiveProps {
  onComplete: () => void;
  goHome: () => void;
}

export const LevelFive: React.FC<LevelFiveProps> = ({ onComplete, goHome }) => {
  const modalRef = useRef<ModalRef>(null);
  const [answer, setAnswer] = useState("");

  const handleCheckAnswer = () => {
    if (answer === "101") {
      modalRef.current?.open();
    }
  };

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
          <p className="font-bold text-3xl text-[#FF1D92]">5</p>
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
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#FFC9E6]">
                0
              </div>
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#FFC9E6]">
                0
              </div>
            </div>
            <div>
              <p className="font-bold text-sm text-[#0E0226]">
                How many transistors are needed to represent this number?
              </p>
              <div className="my-2">
                <TextInput
                  inputProps={{
                    placeholder: "Type your answer here",
                    value: answer,
                    onChange: (e) => setAnswer(e.target.value),
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
              level="6"
              onNextLevel={onComplete}
              onGoHome={goHome}
            />
          </Modal>
        </div>
        <div className="absolute  bottom-8 right-0">
          <HelpIcon />
        </div>
      </div>
    </>
  );
};
