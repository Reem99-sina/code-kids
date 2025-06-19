import {BatteryIconB, HomeIcon, Light, LightOff} from "@/assets";
import {Modal, ModalRef} from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import {TransmitCard} from "@/components/common/transmit-card";
import {useEffect, useRef, useState} from "react";
import {LevelComplete} from "../LevelComplete";
import {Button} from "@/components/common/button.component";
import CommonModal from "@/components/common/common-modal";
import ModalReviewResult from "../Level-two/modal-review-result";
import HelpME from "@/components/common/help.me";

interface LevelOneProps {
  onComplete: () => void;
  goHome: () => void;
  open: boolean;
  hint: string;
  source?: string;
}

export const LevelOne: React.FC<LevelOneProps> = ({
  onComplete,
  goHome,
  open,
  hint,
  source,
}) => {
  const refModal = useRef<ModalRef>(null);
  const [conductorPressed, setConductorPressed] = useState(false);
  const [semiconductorPressed, setSemiconductorPressed] = useState(false);
  const [insulatorPressed, setInsulatorPressed] = useState(false);
  const [answer, setAnswer] = useState(false);

  const [progress, setProgress] = useState(0);
  const modalRef = useRef<ModalRef>(null);
  const modalHintRef = useRef<ModalRef>(null);
  const modalResultRef = useRef<ModalRef>(null);
  const [message, setMessage] = useState({
    title: "",
    desc: "",
  });

  const resetPlay = () => {
    setConductorPressed(false);
    setInsulatorPressed(false);
    setSemiconductorPressed(false);
  };

  useEffect(() => {
    const activeCount =
      Number(conductorPressed) +
      Number(semiconductorPressed) +
      Number(insulatorPressed);

    const newProgress = Math.round((activeCount / 3) * 100);

    setProgress(answer ? newProgress - 20 : newProgress);
  }, [conductorPressed, semiconductorPressed, insulatorPressed]);
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
                {icon: <BatteryIconB />, label: "Battery"},
                {
                  icon: conductorPressed ? <Light /> : <LightOff />,
                  label: "Light",
                },
              ]}
              buttonText={!conductorPressed ? "Power" : "Power on"}
              onButtonClick={() => setConductorPressed((prev) => !prev)}
            />

            <TransmitCard
              title="Semiconductor"
              icons={[
                {icon: <BatteryIconB />, label: "Battery"},
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
                {icon: <BatteryIconB />, label: "Battery"},
                {
                  icon: insulatorPressed ? <Light /> : <LightOff />,
                  label: "Light",
                },
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
              onClick={() => {
                if (
                  conductorPressed &&
                  semiconductorPressed &&
                  insulatorPressed
                ) {
                  modalRef.current?.open();
                } else {
                  setMessage({
                    title: "Game Over! ",
                    desc: "Time ran out or incorrect sorting.",
                  });
                  resetPlay();
                  modalResultRef.current?.open();
                }
              }}
            />
          </div>
          <Modal ref={modalRef}>
            <LevelComplete
              level="1"
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
            src={source}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </CommonModal>
      <HelpME
        answer={answer}
        hint={hint}
        setAnswer={() => setAnswer(true)}
        refModal={modalHintRef}
        solution={"press on all the button"}
      />
      <Modal
        ref={modalResultRef}
        className="bg-transparent"
        // classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
        // onClose={() => navigate("/")}
      >
        <ModalReviewResult
          title={message?.title}
          desc={message?.desc}
          onClick={() => {
            modalResultRef?.current?.close();
          }}
        />
      </Modal>
    </>
  );
};
