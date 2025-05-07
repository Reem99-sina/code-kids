import React, {useEffect, useRef, useState} from "react";
import ProgressBar from "@/components/common/ProgressBar";
import {Modal, ModalRef} from "@/components/common/modal.component";
import {Button} from "@/components/common/button.component";
import {HelpIcon, HomeIcon} from "@/assets";
import {Star} from "@/assets";
import {LevelComplete} from "../LevelComplete";
import {generateBinary} from "@/utils/binary.util";
import clsx from "clsx";

interface LevelTenProps {
  onComplete: () => void;
  goHome: () => void;
}

const LevelTen: React.FC<LevelTenProps> = ({onComplete, goHome}) => {
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [binaryNumberBorrow, setBinaryNumberBorrow] = useState(
    Array(level + 1).fill(0)
  );
  const [binaryResult, setBinaryResult] = useState(Array(level + 1).fill(0));
  const modalRef = useRef<ModalRef>(null);
  // const [add, setAdd] = useState("01");
  const max = 2 ** (level + 1) - 1;

  const [one, setOne] = useState(
    generateBinary({
      length: level + 1,
      DecNumber: Math.floor(Math.random() * max) + 1,
    })
  );
  const [two, setTwo] = useState(
    generateBinary({
      length: level + 1,
      DecNumber: Math.floor(Math.random() * max) + 1,
    })
  );

  function subtractBinaryStrings(...binaries: string[]): {
    result: number[];
    borrows: number[];
  } {
    if (binaries.length < 2) {
      throw new Error("Provide at least two binary numbers to subtract.");
    }

    const maxLength = Math.max(...binaries.map((b) => b.length));
    const padded = binaries.map((b) => b.padStart(maxLength, "0"));

    const result: number[] = [];
    const borrows: number[] = [];
    let borrow = 0;

    for (let i = maxLength - 1; i >= 0; i--) {
      const minuend = parseInt(padded[0][i]);
      const subtrahend = padded
        .slice(1)
        .reduce((sum, bin) => sum + parseInt(bin[i]), 0);

      const temp = minuend - subtrahend - borrow;

      if (temp >= 0) {
        result.unshift(temp);
        borrows.unshift(0);
        borrow = 0;
      } else {
        result.unshift(temp + 2);
        borrows.unshift(1);
        borrow = 1;
      }
    }

    return {result, borrows};
  }

  const toggleValueResult = (index: number) => {
    const update = [...binaryResult];
    update[index] = update[index] === 0 ? 1 : 0;
    setBinaryResult([...update]);
  };

  const toggleValue = (index: number) => {
    const update = [...binaryNumberBorrow];
    update[index] = update[index] === 0 ? 1 : 0;
    setBinaryNumberBorrow([...update]);
  };

  function answerProgress(): void {
    const ans = subtractBinaryStrings(one, two);
    let r1 = 0;
    let r2 = 0;
    if (ans.borrows.join(``) === binaryNumberBorrow.join(``)) {
      r1 = 1;
    }

    if (ans.result.join(``) === binaryResult.join(``)) {
      r2 = 1;
    }

    const newProgress = Math.round(((r1 + r2) / 2) * 100);

    setProgress(newProgress);
    if (newProgress == 100) {
      setLevel((l) => l + 1);
    }
  }

  useEffect(() => {
    setProgress(0);
    if (level <= 3) {
      // setAdd(level == 1 ? "01" : level == 2 ? "001" : "0001");
      setBinaryNumberBorrow(Array(level + 1).fill(0));
      setBinaryResult(Array(level + 1).fill(0));
      setOne(generateBinary({length: level + 1, DecNumber: Math.random()}));
      setTwo(generateBinary({length: level + 1, DecNumber: Math.random()}));
    } else {
      setLevel(4);
      modalRef.current?.open();
    }
  }, [level]);

  useEffect(() => {
    answerProgress();
  }, [binaryNumberBorrow, binaryResult]);

  useEffect(() => {
    setProgress(0);
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white rounded  min-h-[500px] relative ">
        <div className="mb-4 flex justify-center">
          <p className=" font-bold text-3xl text-black ">
            Binary addition Game
          </p>
        </div>
        <div className="flex justify-center gap-4 ">
          <Button
            text="Codet"
            startIcon={<Star className=" mx-2 h-6" />}
            className={clsx(
              level == 1
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              "!px-8 !rounded-[10px] border border-purpleOne",
              "w-[15%]"
            )}
          />
          <Button
            text="pilot"
            startIcon={<Star className="mx-2 h-6" />}
            className={clsx(
              level == 2
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              "!px-8 !rounded-[10px] border border-purpleOne",
              "w-[15%]"
            )}
          />{" "}
          <Button
            text="Caption"
            startIcon={<Star className="mx-2 h-6" />}
            className={clsx(
              level == 3
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              "!px-8 !rounded-[10px] border border-purpleOne",
              "w-[15%]"
            )}
          />{" "}
          <Button
            text="Commander"
            startIcon={<Star className="mx-2 h-6" />}
            className={clsx(
              level == 4
                ? "bg-purpleOne text-white"
                : "bg-white text-purpleOne",
              "!px-8 !rounded-[10px] border border-purpleOne",
              "w-[15%]"
            )}
          />
        </div>

        <div className="flex flex-col items-center justify-center mx-12 p-5 m-3">
          <p>Your Progress</p>
          <div className="w-3/4">
            <ProgressBar progress={progress} />
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center justify-center w-3/4 bg-[#FFC9E6] m-3 p-5">
            <div className="bg-white w-[40%] justify-center rounded-xl m-4 p-3">
              <div className="flex justify-start mx-12">
                {binaryNumberBorrow.map((p, index) => {
                  return (
                    <>
                      <button
                        className="bg-[#FFC9E6] m-1"
                        onClick={() => toggleValue(index)}>
                        {p}
                      </button>
                    </>
                  );
                })}
              </div>
              <div className="flex justify-center flex-col items-center">
                <p className="font-bold text-3xl text-black">{one}</p>
                <p className="font-bold text-3xl text-blue">-</p>
                <p className="font-bold text-3xl text-black">{two}</p>
              </div>
              <hr className="border-t-2 border-red-600 my-4" />
              <div className="flex justify-start mx-12">
                {binaryResult.map((p, index) => {
                  return (
                    <>
                      <button
                        className="bg-[#FFC9E6] m-1"
                        onClick={() => toggleValueResult(index)}>
                        {p}
                      </button>
                    </>
                  );
                })}
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
              />
            </div>

            <Modal ref={modalRef}>
              <LevelComplete onNextLevel={onComplete} onGoHome={goHome} level={""} />
            </Modal>
          </div>
        </div>
      </div>
      <div className="absolute  bottom-8 right-0 h-96">
        <HelpIcon />
      </div>
    </>
  );
};

export default LevelTen;
