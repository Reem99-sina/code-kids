import { HomeIcon } from "@/assets";
import { Modal, ModalRef } from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import { JSX, useEffect, useRef, useState } from "react";
import { LevelComplete } from "../LevelComplete";
import { Button } from "@/components/common/button.component";
import { TextInput } from "@/components/common/form/text-input.component";
import CommonModal from "@/components/common/common-modal";

interface LevelFourProps {
  onComplete: () => void;
  goHome: () => void;
  open: boolean;
  hint: JSX.Element;
  source:string  

}

export const LevelFour: React.FC<LevelFourProps> = ({
  onComplete,
  goHome,
  open,
  hint,
  source
}) => {
  // const [conductorPressed, setConductorPressed] = useState(false);
  // const [semiconductorPressed, setSemiconductorPressed] = useState(false);
  // const [insulatorPressed, setInsulatorPressed] = useState(false);
  // const [progress, setProgress] = useState(0);
  const [answer, setAnswer] = useState("");
    const [result, setResult] = useState(false);
  
  const refModal = useRef<ModalRef>(null);
  const modalRef = useRef<ModalRef>(null);
 const modalHintRef = useRef<ModalRef>(null);

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
    if (answer === "101") {
      modalRef.current?.open();
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


  return (
    <div className="flex flex-col">
      <div className="mb-4 flex justify-start">
        <p className="font-bold text-3xl text-white">Binary Fun Time! </p>
      </div>

      <div className="flex flex-col items-center min-h-[524px] gap-4 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl text-[#0E0226] font-bold">Current mission:</h2>
        <p className="font-bold text-5xl text-[#FF1D92]">5</p>
        <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
        <div className="flex w-[80%]">
          <ProgressBar progress={0} />
        </div>
        <div className="min-w-[894px] min-h-[182px] flex items-center flex-col bg-[#FFE5F3] gap-2 rounded-lg">
          <div className="flex items-center gap-3 mt-2">
            <div className="w-[66px] h-[66px] flex items-center justify-center bg-[#FFC9E6]">
              0 
            </div>
            <div className="w-[66px] h-[66px] flex items-center justify-center bg-[#FFC9E6]">
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
          <LevelComplete level="4" onNextLevel={onComplete} onGoHome={goHome} />
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
      </CommonModal>
             <CommonModal refModal={modalHintRef} title={"Teach Course"}>
        {
          <>
            {" "}
            {hint}
            <Button
            className={`${result?`bg-white`:``}`}
              onClick={() => {
                if(!result)
               { const confirmed = confirm("Do you want to reveal the answer?");
                if (confirmed) {
                  setResult(true);
                }}
              }}
              text={"Show answer"}
            />
            {result ? <p className="text-lg text-bold">press on all the button</p> : <></>}
          </>
        }
      </CommonModal>
    </div>
  );
};
