import {
  AppearIcon,
  ClockYellow,
  Conductors,
  Copper,
  Germanium,
  Glass,
  Gold,
  HomeIcon,
  Insulators,
  Iron,
  Plassic,
  Semiconductors,
  Silicon,
  Wood,
} from "@/assets";
import ProgressBar from "@/components/common/ProgressBar";
import { useEffect, useRef, useState } from "react";
import EachMaterial from "./each-material";
import EachCollector from "./each-collector";
import { Button } from "@/components/common/button.component";
import { Modal, ModalRef } from "@/components/common/modal.component";
import ModalReviewResult from "./modal-review-result";
import CommonModal from "@/components/common/common-modal";

export const LevelTwo = ({
  onComplete,
  goHome,
  open
}: {
  onComplete: () => void;
  goHome: () => void;
  open:boolean
}) => {
  const refModal = useRef<ModalRef>(null);
  const modalRef = useRef<ModalRef>(null);

  const [time, setTime] = useState(60);
  const [message] = useState({
    title: "",
    desc: "",
  });

  const [level] = useState(1);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime((prev) => prev - 1);
      } else {
        refModal?.current?.open();
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  useEffect(() => {
    if (open) {
      modalRef?.current?.open();
    }
  }, [open]);

  useEffect(() => {
    modalRef?.current?.open();
  }, []);

  return (
    <div className="flex flex-col text-white justify-start items-start ">
      <h3 className="text-3xl font-bold mb-3">Coding for Kids</h3>
      <h3 className="text-2xl font-bold">
        Chapter 2: Binary Addition, Hexadecimal to binary
      </h3>
      <div className=" bg-white rounded-lg py-5 px-3 flex flex-col gap-4 w-full min-h-[500px] relative mt-6 justify-start items-center text-black">
        <AppearIcon className="absolute -right-1" />
        <h3 className="text-xl font-bold">Material Science Explorer</h3>
        <div className="flex items-center gap-3">
          <ClockYellow />
          <p className="text-pinkOne text-xl font-bold ">{time} S</p>
        </div>
        <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
        <div className="flex w-[80%]">
          <ProgressBar progress={(((level - 1) * 25) / 100) * 100} />
        </div>
        <h3 className="text-xl font-bold">Avaliable materials</h3>
        <div className=" flex items-center gap-4 flex-wrap w-[60%] justify-center">
          {materials?.map((ele) => (
            <EachMaterial
              {...ele}
              constraintsRef={constraintsRef}
              key={ele?.title}
            />
          ))}
        </div>
        <div className="flex gap-5" ref={constraintsRef}>
          <EachCollector title="Conductors" icon={<Conductors />} />
          <EachCollector title="Insulators" icon={<Insulators />} />
          <EachCollector title="Semiconductors" icon={<Semiconductors />} />
        </div>
        <div className="flex items-center gap-10">
          <Button
            text="Back to Home"
            className="!max-w-[220px] !rounded-[50px] gap-2 whitespace-nowrap !px-9"
            startIcon={<HomeIcon />}
            onClick={goHome}
          />
          <Button
            text="Check Answer"
            className="!max-w-[220px] !rounded-[50px] whitespace-nowrap !px-9"
            onClick={onComplete}
          />
        </div>
      </div>
      <Modal
        ref={refModal}
        className="bg-transparent "
        // classNameOverlay="bg-[url('/celebrate.png')] bg-cover bg-center"
        // onClose={() => navigate("/")}
      >
        <ModalReviewResult
          title={message?.title}
          desc={message?.desc}
          onClick={() => {
            refModal?.current?.close();
            setTime(60);
          }}
        />
      </Modal>
      <CommonModal refModal={modalRef} title={"Teach Course"}>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://edu-project-2.s3.us-east-1.amazonaws.com/static/Video+2+Materials+Science+Explorer.mp4`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CommonModal>
    </div>
  );
};

export const materials = [
  {
    title: "Copper",
    icon: <Copper />,
  },
  {
    title: "Iron",
    icon: <Iron />,
  },
  {
    title: "Gold",
    icon: <Gold />,
  },
  {
    title: "Glass",
    icon: <Glass />,
  },
  {
    title: "Plastic",
    icon: <Plassic />,
  },
  {
    title: "Wood",
    icon: <Wood />,
  },
  {
    title: "Silicon",
    icon: <Silicon />,
  },
  {
    title: "Germanium",
    icon: <Germanium />,
  },
];

// const ConductorsResult = ["Iron", "Copper", "Gold"];
// const InsulatorsResult = ["Wood", "Glass", "Plastic"];
// const SemiconductorsResult = ["Germanium", "Silicon"];
