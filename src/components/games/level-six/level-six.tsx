import { Button } from "@/components/common/button.component";
import {
  BoxInterface,
  componentInputProps,
  dotInfo,
  eachElement,
  generateUniqueId,
  LineDirection,
  mouseMove,
} from "@/utils/logic.util";
import { FunctionComponent, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import IconDots from "../icon-dots";
import { LampOff, LampOn } from "@/assets";
import { Modal, ModalRef } from "@/components/common/modal.component";
import { LevelComplete } from "@/components/levels/LevelComplete";
import toast from "react-hot-toast";

interface LevelFiveProps {
  onComplete: () => void;
  goHome: () => void;
}

const LevelSix: React.FC<LevelFiveProps> = ({ goHome, onComplete }) => {
  const modalRef = useRef<ModalRef>(null);
  const [binary, setBinary] = useState({ input_1: 0, input_2: 0 });
  const constraintsRef = useRef<HTMLDivElement>(null);
  const rect = constraintsRef?.current?.getBoundingClientRect();
  const [visible, setVisible] = useState<number | undefined>();
  const [boxes, setBoxes] = useState<BoxInterface[]>([]);
  const [lines, setLines] = useState<(LineDirection | undefined)[]>([]); // Final lines
  const [startDot, setStartDot] = useState<dotInfo | null>(null); // Starting dot
  const [mousePos, setMousePos] = useState<mouseMove | null>(null); // For live line

  const handleDotClick = ({
    dot,
    input,
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    dot: dotInfo;
    input?: string;
  }) => {
    if (!rect) return;
    if (!startDot) {
      setStartDot({ ...dot, x: dot.x - rect.left, y: dot.y - rect.top, input });
    } else {
      if (dot.id !== startDot.id) {
        setLines([
          ...lines,
          { from: startDot, to: { ...dot, ...mousePos, input } },
        ]);
      }
      setStartDot(null);
      setMousePos(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!startDot || !rect) return;

    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const hasInput = useMemo(() => {
    return boxes.filter((ele) => ele?.title == "input");
  }, [boxes]);

  const hasNand = useMemo(() => {
    return boxes.filter((ele) => ele?.title == "nand");
  }, [boxes]);

  const output = ({
    input_1,
    input_2,
  }: {
    input_1: number;
    input_2: number;
  }) => {
    return (input_1 == 0 && input_2 == 0) || input_1 != input_2 ? 1 : 0;
  };

  const outputAnd = ({
    input_1,
    input_2,
  }: {
    input_1: number;
    input_2: number;
  }) => {
    return input_1 == 1 && input_2 == 1 ? 1 : 0;
  };

  const validateConnections = () => {
    const connections = [...lines];

    const nandGate = boxes.find((box) => box.title === "nand");
    const nandSecondGate = boxes.find(
      (box) => box.title === "nand" && box?.repeat == 1
    );

    const lamp = boxes.find((box) => box.title === "lamp-off");
    const result = outputAnd({
      input_1: binary["input_1"],
      input_2: binary["input_2"],
    });

    if (!nandGate || !lamp || result == 0 || !nandSecondGate) {
      toast.error("Missing NAND gate or Lamp.");

      return;
    }

    const inputsToAnd = connections.filter(
      (line) => line?.to.id === nandGate?.id
    );
    const inputsToSecondAnd = connections.filter(
      (line) => line?.to.id === nandSecondGate?.id
    );
    const andToLamp = connections.find((line) => line?.to.id === lamp?.id);

    if (inputsToAnd.length > 1 && andToLamp && inputsToSecondAnd?.length > 1) {
      modalRef.current?.open();
    } else {
      toast.error("❌ Incorrect logic, try again.");
    }
  };

  return (
    <>
      {" "}
      <div
        className="relative w-full  bg-gray-100"
        onMouseMove={handleMouseMove}
      >
        <div
          className="bg-purpleLight min-h-[380px] w-full "
          ref={constraintsRef}
        >
          {boxes?.map((ele, index) => {
            const Icon = ele?.Icon;
            const Reverse = ele?.Reverse;

            return (
              <motion.div
                drag
                dragMomentum={false}
                dragConstraints={constraintsRef}
                className="absolute"
                onContextMenu={(event) => {
                  event?.preventDefault();
                  setVisible(index);
                }}
                key={index}
              >
                <div className="relative">
                  {ele?.title == "input" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "center",
                          color:
                            binary[
                              `input_${ele?.index}` as keyof typeof binary
                            ] == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={({ event, dot }) =>
                        handleDotClick({
                          dot,
                          event,
                          input: `input_${ele?.index}`,
                        })
                      }
                    />
                  ) : ele?.title == "lamp-off" || ele?.title == "lamp-on" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "center",
                          color:
                            outputAnd({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                          side: "left",
                        },
                      ]}
                      onClick={handleDotClick}
                    />
                  ) : ele?.repeat == 0 && ele?.title == "nand" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color: binary["input_1"] == 1 ? "green" : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color: binary["input_2"] == 1 ? "green" : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color:
                            output({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={handleDotClick}
                    />
                  ) : (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color:
                            output({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color:
                            output({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color: outputAnd({
                            input_1: binary["input_1"],
                            input_2: binary["input_2"],
                          })
                            ? "green"
                            : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={handleDotClick}
                    />
                  )}

                  {ele?.title == "input" ? (
                    (() => {
                      const Component =
                        Icon as FunctionComponent<componentInputProps>;
                      const id = `input_${ele?.index}` as keyof typeof binary;

                      return (
                        <Component
                          value={binary[id]}
                          onChange={(value) =>
                            setBinary((prev) => ({ ...prev, [id]: value }))
                          }
                          key={index}
                        />
                      );
                    })()
                  ) : ele?.title == "lamp-off" || ele?.title == "lamp-on" ? (
                    outputAnd({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                    }) == 1 ? (
                      <LampOn />
                    ) : (
                      <LampOff />
                    )
                  ) : ele?.repeat == 0 && ele?.title == "nand" ? (
                    output({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                    }) == 1 ? (
                      Reverse ? (
                        <Reverse />
                      ) : (
                        <></>
                      )
                    ) : (
                      <Icon />
                    )
                  ) : outputAnd({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                    }) == 1 ? (
                    Reverse ? (
                      <Reverse />
                    ) : (
                      <></>
                    )
                  ) : (
                    <Icon />
                  )}
                </div>

                {visible == index && (
                  <div className="absolute -bottom-8 bg-white -right-12 p-2 rounded">
                    <Button
                      text="Delete Gate"
                      className="!text-xs !bg-white !border !border-gray-300 !whitespace-nowrap !p-1"
                      onClick={() => {
                        setBoxes((prev) =>
                          prev ? prev.filter((_, ind) => ind != index) : []
                        );
                        setVisible(undefined);
                      }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            {/* Final lines */}
            {lines?.map((line, index) => (
              <motion.line
                key={index}
                x1={line?.from.x}
                y1={line?.from.y}
                initial={{ x2: line?.from.x, y2: line?.from.y }}
                animate={{ x2: line?.to.x, y2: line?.to.y }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                stroke={
                  line?.from?.input
                    ? binary[line?.from?.input as keyof typeof binary] == 1
                      ? "green"
                      : "red"
                    : line?.to?.input
                      ? binary[line?.to?.input as keyof typeof binary] == 1
                        ? "green"
                        : "red"
                      : line?.from?.direction == "bottom" ||
                          line?.to?.direction == "bottom" ||
                          line?.from?.direction == "top" ||
                          line?.to?.direction == "top"
                        ? output({
                            input_1: binary["input_1"],
                            input_2: binary["input_2"],
                          }) == 1
                          ? "green"
                          : "red"
                        : line?.from?.color == line?.to?.color &&
                            outputAnd({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                            }) == 1
                          ? "green"
                          : "red"
                }
                strokeWidth="2"
              />
            ))}

            {/* Live drawing line */}
            {startDot && mousePos && (
              <motion.line
                x1={startDot.x}
                y1={startDot.y}
                x2={mousePos.x}
                y2={mousePos.y}
                stroke="blue"
                strokeWidth="2"
              />
            )}
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <Button
          text="Create AND Gate"
          className="bg-orangeTwo whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [...prev, { ...eachElement[0] }]);
          }}
        />
        <Button
          text="Create QR Gate"
          className="bg-blueGreenCustom whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              { ...eachElement[1], id: generateUniqueId() },
            ]);
          }}
        />
        <Button
          text="Create NOT Gate"
          className="bg-yellowFunf  whitespace-nowrap !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              { ...eachElement[5], id: generateUniqueId() },
            ]);
          }}
        />
        <Button
          text="Create LAMP"
          className="bg-orangeLight whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              { ...eachElement[2], id: generateUniqueId() },
            ]);
          }}
        />
        <Button
          text="Create INPUT"
          className="bg-purpleEight whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              {
                ...eachElement[3],
                id: generateUniqueId(),
                index: hasInput?.length == 1 ? 2 : 1,
              },
            ]);
          }}
        />
        <Button
          text="Create NAND Gate"
          className="bg-purpleNine whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              {
                ...eachElement[4],
                id: generateUniqueId(),
                repeat: hasNand?.length,
              },
            ]);
          }}
        />
        <Button
          text="Check Logic"
          className="bg-green-600 text-white !w-auto"
          onClick={validateConnections}
        />
      </div>
      <Modal ref={modalRef}>
        <LevelComplete level="6" onNextLevel={onComplete} onGoHome={goHome} />
      </Modal>
    </>
  );
};

export default LevelSix;
