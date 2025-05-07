import {HelpIcon, HomeIcon, Reward, Star} from "@/assets";
import {Button} from "@/components/common/button.component";
import {Modal, ModalRef} from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";

import {useEffect, useRef, useState} from "react";
import {LevelComplete} from "../LevelComplete";
import { generateBinary, sumBinaryNumber } from "@/utils/binary.util";
import clsx from "clsx";
import toast from "react-hot-toast";
import ToggleButton from "@/components/common/toggleButton";

interface LevelElevenProps {
  onComplete: () => void;
  goHome: () => void;
}

const ToggleGroup = ({
  values,
  onToggle,
}: {
  values: number[];
  onToggle: (index: number) => void;
}) => (
  <>
    {values.map((value, index) => (
      <ToggleButton
        key={index}
        binaryNumbers={value}
        toggleButton={() => onToggle(index)}
      />
    ))}
  </>
);

const LevelEleven: React.FC<LevelElevenProps> = ({onComplete, goHome}) => {
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [add, setAdd] = useState("");

  const [binaryA, setBinaryB] = useState(
    generateBinary({length: level + 3, DecNumber: Math.random()})
  );
  const [two, setTwo] = useState(
    generateBinary({length: level + 3, DecNumber: Math.random()})
  );

  const onesComplement = (bit: string) => {
    return bit
      .split("")
      .map((b) => (b == "0" ? "1" : "0"))
      .join("");
  };

  const [onesAndTwosNumber, setOnesNumber] = useState(
    Array((level + 3) * 2).fill(0)
  );
  const [answer, setAnswer] = useState(Array(level + 3).fill(0));

  const modalRef = useRef<ModalRef>(null);

  const toggleValue = (index: number) => {
    const update = [...onesAndTwosNumber];

    update[index] = update[index] === 0 ? 1 : 0;
    setOnesNumber([...update]);
  };
  const toggleAnswer = (index: number) => {
    const toggleAnswer = [...answer];
    toggleAnswer[index] = toggleAnswer[index] === 0 ? 1 : 0;
    setAnswer([...toggleAnswer]);
  };

  function checkTheAnswer(): void {
    const firstComplement = onesComplement(two);
    const ans = sumBinaryNumber({
      first_num: firstComplement,
      second_num: add,
    });
    const lastAns = sumBinaryNumber({
      first_num: ans.total,
      second_num: binaryA,
    });

    if (Number(two) == 0) {
      setTwo(generateBinary({length: level + 3, DecNumber: Math.random()}));
    }
    if (
      Number(onesComplement(two)) ===
      Number(onesAndTwosNumber.slice(0, level + 3).join(""))
    ) {
      const secondAnswer = ans.total.slice(-(level + 3));
      if (
        Number(secondAnswer) ===
        Number(onesAndTwosNumber.slice(level + 3).join(""))
      ) {
        const realFinalAnswer = lastAns.total.slice(-(level + 3));
        if (Number(realFinalAnswer) === Number(answer.join(""))) {
          setLevel((prev) => prev + 1);
          toast.success("Great job! Keep going! Answer is correct ");
          setProgress(Math.round((level / 3) * 100));
        } else {
          toast.success("One’s complement and Two’s Complement are correct");
          toast.error(
            "But Add A and Two’s Complement of B is incorrect " +
              "sum:" +
              lastAns.total.slice(-(level + 3))
          );
        }
      } else {
        toast.success("One’s complement is correct");
        toast.error(
          "But Two’s Complement and the sum is incorrect " +
            "Two’s Complement:" +
            ans.total.slice(-(level + 3)) +
            "sum:" +
            lastAns.total.slice(-(level + 3))
        );
      }
    } else
      toast.error(
        "No answer is correct One’s complement:" +
          firstComplement +
          "Two’s Complement:" +
          ans.total.slice(-(level + 3)) +
          "sum:" +
          lastAns.total.slice(-(level + 3))
      );
  }

  useEffect(() => {
    if (level <= 3) {
      setAdd(level == 1 ? "0001" : level == 2 ? "00001" : "000001");
      setAnswer(Array(level + 3).fill(0));
      setOnesNumber(Array((level + 3) * 2).fill(0));
      setBinaryB(generateBinary({length: level + 3, DecNumber: Math.random()}));
      setTwo(generateBinary({length: level + 3, DecNumber: Math.random()}));
    } else {
      setLevel(3);
      modalRef.current?.open();
    }
  }, [level]);

  return (
    <>
      <div className="flex flex-col bg-white rounded  m-5 p-3 min-h-[500px] relative  ">
        <div className="mb-4 flex justify-center">
          <p className=" font-bold text-3xl text-black ">
            Binary Subtraction Using Two’s complement{" "}
          </p>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button
            text="Codet"
            startIcon={<Star className="mx-2" />}
            className={clsx(
              level == 1
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              " !px-8 !rounded-[10px] border-purpleOne",
              "w-[15%]"
            )}
          />
          <Button
            text="Pilot"
            startIcon={<Star className="mx-2 h-6" />}
            className={clsx(
              level == 2
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              "!px-8 !rounded-[10px] border border-purpleOne",
              "w-[15%]"
            )}
          />
          <Button
            text="Commander"
            startIcon={<Reward className="mx-2" />}
            className={clsx(
              level == 3
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              " !px-8 !rounded-[10px] border border-purpleOne",
              "w-[15%]"
            )}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-12 p-5 m-3 ">
          <p>Your Progress</p>
          <div className="w-3/4">
            <ProgressBar progress={progress} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center m-3 p-5 mx-12">
          <div className="flex flex-col justify-center m-2  w-3/4 bg-[#FFE5F3] ">
            <div className="flex justify-stat">
              <p className="font-bold text-black  p-3 text-sm ">
                Numbers To Subtract:
              </p>
            </div>
            <div className="flex justify-center ">
              <div className="w-[45%] flex justify-around ">
                <p className="flex text-xl font-bold text-black m-3 p-1 ">
                  A :<span className="text-[#FF1D92]">{binaryA}</span>
                </p>
                <p className="flex text-xl font-bold text-black m-3 p-1 ">
                  B : <span className="text-[#FF1D92]">{two}</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="w-[45%] flex justify-around ">
                <p className="flex text-xl font-bold text-black m-3 p-1 ">
                  A - B{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center m-2  w-3/4 bg-[#FFE5F3] ">
            <div className="flex justify-stat">
              <p className="flex flex-col font-bold text-black  p-3 text-sm ">
                Find Two’s Complement of B:
                <span className="opacity-50">1. One’s Complement of B: </span>
              </p>
            </div>

            <div className="flex justify-center ">
              <div className="w-[45%] flex justify-center ">
                <ToggleGroup
                  values={onesAndTwosNumber.slice(0, level + 3)}
                  onToggle={(i) => toggleValue(i)}
                />
              </div>
            </div>
            <div className="flex justify-start p-3 m-2">
              <p className="font-bold opacity-50 text-sm">
                2. two’s Complement of B:{" "}
              </p>
            </div>
            <div className="flex justify-center ">
              <div className="w-[45%] flex justify-center ">
                <ToggleGroup
                  values={onesAndTwosNumber.slice(level + 3)}
                  onToggle={(i) => toggleValue(i + (level + 3))}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center m-2  w-3/4 bg-[#FFE5F3] ">
            <div className="flex justify-start p-3 m-2">
              <p className="font-bold ">Add A and Two’s Complement of B:</p>
            </div>
            <div className="flex justify-center ">
              <div className="w-[45%] flex justify-center ">
                <ToggleGroup values={answer} onToggle={toggleAnswer} />
              </div>
            </div>
          </div>
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
            onClick={checkTheAnswer}
          />
        </div>
        <Modal ref={modalRef}>
          <LevelComplete onNextLevel={onComplete} onGoHome={goHome} level={""} />
        </Modal>
      </div>
      <div className="absolute  bottom-0 right-0 h-48">
        <HelpIcon />
      </div>
    </>
  );
};


export default LevelEleven;
