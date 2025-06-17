import {
  HelpIcon,
  HomeIcon,
  HorizontalLightLine,
  VerticalDarkLine,
  VerticalLightLine,
} from "@/assets";
import {Modal, ModalRef} from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import {LevelComplete} from "../LevelComplete";
import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/common/button.component";

interface LevelEighteenProps {
  onComplete: () => void;
  goHome: () => void;
}

const LevelEighteen = ({onComplete, goHome}: LevelEighteenProps) => {
  const [progress, setProgress] = useState(0);
  const [toggleButton, setToggleButton] = useState(Array(7).fill(0));
  const modalRef = useRef<ModalRef>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [number] = useState(getRandomDecimal1to15());
  const toggleValue = (index: number) => {
    const update = [...toggleButton];
    update[index] = update[index] === 0 ? 1 : 0;
    setToggleButton([...update]);
  };
  function getRandomDecimal1to15(): number {
    return Math.floor(Math.random() * 15) + 1;
  }
  function convertDecimal(decimal: number): {binary: string; hex: string} {
    return {
      binary: decimal.toString(2).padStart(4, "0"),
      hex: decimal.toString(16),
    };
  }
  function checkSegments(): void {
    let result = 0;
    switch (toggleButton.join(``)) {
      case "0010010":
        result = 1;
        break;
      case "1011101":
        result = 1;
        break;

      case "1011011":
        result = 1;
        break;
      case "0111010":
        result = 1;
        break;
      case "1101011":
        result = 1;
        break;
      case "1101111":
        result = 1;
        break;
      case "1010010":
        result = 1;
        break;
      case "1111111":
        result = 1;
        break;
      case "1111011":
        result = 1;
        break;
      case "1111110":
        result = 1;
        break;
      case "0101111":
        result = 1;
        break;
      case "1100101":
        result = 1;
        break;
      case "1110111":
        result = 1;
        break;
      case "1101101":
        result = 1;
        break;
      case "1101100":
        result = 1;
        break;
    }
    const resultHex = convertDecimal(number);
    let hexAnswer = 0;
    if (resultHex.hex === inputValue) hexAnswer = 1;
    const newProgress = Math.round(((result + hexAnswer) / 2) * 100);

    setProgress(newProgress);
    if (newProgress === 100) {
      modalRef.current?.open();
    }
  }
  useEffect(() => {
    checkSegments();
  }, [toggleButton, inputValue]);

  return (
    <div className="flex flex-col bg-white rounded justify-center items-center rounded-xl   ">
      <div className="flex flex-col justify-center w-[90%] items-center  ">
        <div className="flex flex-col justify-center w-[90%] ">
          <div className=" mb-4 flex flex-col justify-center m-3">
            <p className=" font-bold text-3xl text-black ">Circuit Adventure</p>
            <p className=" font-bold text-3xl text-black ">{number}</p>
          </div>
          <div className="flex flex-col items-center justify-center mx-12 p-5 m-3">
            <p>Your Progress</p>
            <div className="w-3/4">
              <ProgressBar progress={progress} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center m-2">
          <div className="p-2">
            {toggleButton[0] == 0 ? (
              <div className="flex justify-center items-center">
                <div className="w-[134px] h-[9px] bg-[#DBDBDB] rounded" />
              </div>
            ) : (
              <HorizontalLightLine />
            )}
            <div className="flex justify-between gap-3">
              {toggleButton[1] == 0 ? (
                <VerticalDarkLine />
              ) : (
                <VerticalLightLine />
              )}
              {toggleButton[2] == 0 ? (
                <VerticalDarkLine />
              ) : (
                <VerticalLightLine />
              )}{" "}
            </div>
            {toggleButton[3] == 0 ? (
              <div className="flex justify-center items-center">
                <div className="w-[134px] h-[9px] bg-[#DBDBDB] rounded" />
              </div>
            ) : (
              <HorizontalLightLine />
            )}{" "}
            <div className="flex justify-between">
              {toggleButton[4] == 0 ? (
                <VerticalDarkLine />
              ) : (
                <VerticalLightLine />
              )}
              {toggleButton[5] == 0 ? (
                <VerticalDarkLine />
              ) : (
                <VerticalLightLine />
              )}
            </div>
            {toggleButton[6] == 0 ? (
              <div className="flex justify-center items-center">
                <div className="w-[134px] h-[9px] bg-[#DBDBDB] rounded" />
              </div>
            ) : (
              <HorizontalLightLine />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#FFE5F3] rounded mx-12 p-5 m-3 w-[70%] ">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-xl">
              Toggle bits Click to change 0/1:
            </p>
            <div className="flex">
              {toggleButton.map((value, index) => {
                return (
                  <>
                    <button
                      className="bg-[#FFC9E6] m-2"
                      onClick={() => toggleValue(index)}>
                      {value}
                    </button>
                  </>
                );
              })}
            </div>
            <p className="font-bold text-sm">Enter the Hex value:</p>
            <input
              type="text"
              pattern="[A-Fa-f]|[0-9]{1}$"
              id="dd"
              placeholder="  Enter HEX"
              className="bg-white rounded-sm "
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
          <hr className="w-[90%] mt-5 border-t-4 border-[#FFBCDF] rounded" />
          <div className="flex w-full items-center justify-center gap-10 m-5 p-5">
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
        </div>
      </div>

      <Modal ref={modalRef}>
        <LevelComplete onNextLevel={onComplete} onGoHome={goHome} level={""} />
      </Modal>

      <div className="absolute  bottom-0 right-0 translate-y-[100px] ">
        <HelpIcon />
      </div>
    </div>
  );
};

export default LevelEighteen;
