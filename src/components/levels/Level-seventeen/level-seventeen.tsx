import {HelpIcon} from "@/assets";
import {Button} from "@/components/common/button.component";
import {ModalRef, Modal} from "@/components/common/modal.component";
import ProgressBar from "@/components/common/ProgressBar";
import {HomeIcon, LightbulbIcon} from "lucide-react";
import {useState, useRef, useEffect} from "react";
import {LevelComplete} from "../LevelComplete";

interface LevelSeventeenProps {
  onComplete: () => void;
  goHome: () => void;
}

const LevelSeventeen = ({goHome, onComplete}: LevelSeventeenProps) => {
  const [progress, setProgress] = useState(0);
  const [toggleButton, setToggleButton] = useState([0, 0, 0, 0]);
  const modalRef = useRef<ModalRef>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [transistorValue, setTransistorValue] = useState<string>("");
  const [numberState] = useState(getRandomDecimal1to15());

  const toggleValue = (index: number) => {
    const update = [...toggleButton];
    update[index] = update[index] === 0 ? 1 : 0;
    setToggleButton([...update]);
  };

  function convertDecimal(decimal: number): {binary: string; hex: string} {
    return {
      binary: decimal.toString(2).padStart(4, "0"),
      hex: decimal.toString(16),
    };
  }
  function getRandomDecimal1to15(): number {
    return Math.floor(Math.random() * 15) + 1;
  }
  function checkResult(): void {
    let re1 = 0;
    let re2 = 0;
    let re3 = 0;
    const answer = convertDecimal(numberState);
    if (Number(transistorValue) === 4 && numberState > 7 && numberState < 16)
      re3 = 1;

    if (Number(transistorValue) === 3 && numberState > 3 && numberState < 8)
      re3 = 1;

    if ((Number(transistorValue) === 2 && numberState == 2) || numberState == 3)
      re3 = 1;
    if (Number(transistorValue) === 1 && numberState == 1) re3 = 1;
    if (Number(transistorValue) === 0) re3 = 0;

    if (answer.hex === inputValue) re1 = 1;

    if (answer.binary === toggleButton.join(``)) re2 = 1;

    const newProgress = Math.round(((re1 + re2 + re3) / 3) * 100);

    setProgress(newProgress);
    if (newProgress === 100) {
      modalRef.current?.open();
    }
  }

  useEffect(() => {
    checkResult();
  }, [toggleButton, inputValue, transistorValue]);

  return (
    <div className="flex flex-col bg-white rounded justify-center items-center rounded-xl m-3 p-5   ">
      <div className="flex flex-col justify-center w-[100%] items-center  ">
        <div className="flex flex-col justify-center w-[80%] ">
          <div className=" mb-4 flex flex-col justify-center m-3">
            <p className=" font-bold text-3xl text-black ">Circuit Adventure</p>
            <p className=" font-bold text-3xl text-black ">{numberState}</p>
          </div>
          <div className="flex flex-col items-center justify-center mx-12 p-5 m-3">
            <p>Your Progress</p>
            <div className="w-3/4">
              <ProgressBar progress={progress} />
            </div>
          </div>
        </div>

        <div className="w-[50%] flex flex-col bg-[#FFE5F3] rounded justify-center items-center rounded-xl  mb-4 ">
          <div className="w-[60%] flex flex-col   justify-center items-center rounded-xl  p-3 ">
            <p className="font-bold text-xl text-black p-2 m-2 w-[100%]  ">
              Toggle bits to create binary number
            </p>
            <div className="flex justify-between w-[70%]   ">
              <div className=" text-l text-black  ">Position value </div>
              <div className="flex justify-end gap-5 text-l text-black">
                <span>8</span>
                <span>4</span>
                <span>2</span>
                <span>1</span>
              </div>{" "}
            </div>
            <div className="flex justify-between gap-2">
              {toggleButton.map((value, index) => {
                return (
                  <>
                    <button
                      className="bg-[#FFC9E6] m-1"
                      onClick={() => toggleValue(index)}>
                      {value}
                    </button>
                  </>
                );
              })}
            </div>
          </div>
          <div className="w-[90%]  flex justify-between ">
            <div className="flex flex-col">
              <p className="font-bold ">Your Binary Number</p>
              <p>{toggleButton.join(``)}</p>
            </div>

            <div className="flex flex-col justify-start">
              <p
                className="font-bold text-base  
  ">
                Enter Hexadecimal
              </p>
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
          </div>
          <hr className="w-[90%] mt-5 border-t-4 border-[#FFBCDF] rounded" />
          <div className="flex flex-col justify-center items-center w-[35%] gap-2 mt-3">
            <p>Transistor Count</p>
            <input
              placeholder="    Enter Number of Transistors"
              className="bg-white rounded w-[100%] "
              value={transistorValue}
              onChange={(ev) => {
                setTransistorValue(ev.target.value);
              }}
            />

            <div className="flex">
              <LightbulbIcon />
              <p className=" text-xs">
                {" "}
                <b>Hint:</b> Each bit needs one transistor!
              </p>
            </div>
          </div>

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
        <Modal ref={modalRef}>
          <LevelComplete onNextLevel={onComplete} onGoHome={goHome} level={""} />
        </Modal>
      </div>
      <div className="absolute  bottom-0 right-0 translate-y-[100px] ">
        <HelpIcon />
      </div>
    </div>
  );
};

export default LevelSeventeen;
