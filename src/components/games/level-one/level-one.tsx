import { Button } from "@/components/common/button.component";
import {
  BoxInterface,
  componentInputProps,
  eachElement,
  generateUniqueId,
  useLineInBoxRemove,
} from "@/utils/logic.util";
import { FunctionComponent, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import IconDots from "../icon-dots";
import { Modal, ModalRef } from "@/components/common/modal.component";
import { LevelComplete } from "@/components/levels/LevelComplete";
import { LampOff, LampOn } from "@/assets";

export interface dotInfo {
  color: string;
  direction: string;
  id: number;
  x: number;
  y: number;
}

interface mouseMove {
  x: number;
  y: number;
}
interface LineDirection {
  from: dotInfo;
  to: dotInfo;
}
interface LevelOneProps {
  onComplete: () => void;
  goHome: () => void;
}
const LevelOne: React.FC<LevelOneProps> = ({ onComplete, goHome }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [binary, setBinary] = useState({ input_1: 0, input_2: 0 });
  const rect = constraintsRef?.current?.getBoundingClientRect();
  const [visible, setVisible] = useState<number | undefined>();
  const [boxes, setBoxes] = useState<BoxInterface[]>([]);
  const [lines, setLines] = useState<(LineDirection | undefined)[]>([]);
  const [startDot, setStartDot] = useState<dotInfo | null>(null);
  const [mousePos, setMousePos] = useState<mouseMove | null>(null);
  const modalRef = useRef<ModalRef>(null);

  const onClose = () => {
    setBoxes([]);
    setLines([]);
  };
  const handleDotClick = ({
    dot,
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    dot: dotInfo;
  }) => {
    if (!rect) return;
    if (!startDot) {
      setStartDot({ ...dot, x: dot.x - rect.left, y: dot.y - rect.top });
    } else {
      if (dot.id !== startDot.id) {
        setLines([...lines, { from: startDot, to: { ...dot, ...mousePos } }]);
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

  const validateConnections = () => {
    const connections = [...lines];

    const andGate = boxes.find((box) => box.title === "and");
    const lamp = boxes.find((box) => box.title === "lamp-off");

    if (!andGate || !lamp) {
      alert("Missing AND gate or Lamp.");
      onClose();
      
      return;
    }

    const inputsToAnd = connections.filter(
      (line) => line?.to.id === andGate?.id
    );

    const andToLamp = connections.find(
      (line) => line?.from.id === andGate?.id && line?.to.id === lamp?.id
    );

    if (inputsToAnd.length > 1 && andToLamp) {
      modalRef.current?.open();
    } else {
      onClose();
      alert("❌ Incorrect logic, try again.");
    }
  };

  const output = ({
    input_1,
    input_2,
  }: {
    input_1: number;
    input_2: number;
  }) => {
    return input_1 == 1 && input_2 == 1 ? 1 : 0;
  };

  const hasInput = useMemo(() => {
    return boxes.filter((ele) => ele?.title == "input");
  }, [boxes]);

  return (
    <>
      <div
        className="relative w-full bg-gray-100"
        onMouseMove={handleMouseMove}
      >
        <div
          className="bg-purpleLight min-h-[380px] w-full"
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
                key={ele?.id}
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
                      onClick={handleDotClick}
                    />
                  ) : ele?.title == "lamp-off" || ele?.title == "lamp-on" ? (
                    <IconDots
                      direction_dots_true={[
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
                          side: "left",
                        },
                      ]}
                      onClick={handleDotClick}
                    />
                  ) : (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color: binary["input_2"] == 1 ? "green" : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color: binary["input_1"] == 1 ? "green" : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color: output({
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
                          key={ele?.id}
                        />
                      );
                    })()
                  ) : ele?.title == "lamp-off" || ele?.title == "lamp-on" ? (
                    output({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                    }) == 1 ? (
                      <LampOn />
                    ) : (
                      <LampOff />
                    )
                  ) : output({
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
                        useLineInBoxRemove(boxes[index], lines, (linesNew) =>
                          setLines(linesNew)
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
                  line?.from?.direction == "bottom" ||
                  line?.to?.direction == "bottom"
                    ? binary["input_1"] == 1
                      ? "green"
                      : "red"
                    : line?.from?.direction == "top" ||
                        line?.to?.direction == "top"
                      ? binary["input_2"] == 1
                        ? "green"
                        : "red"
                      : output({
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

      <div className="flex items-center gap-3 flex-wrap mt-4">
        <Button
          text="Create AND Gate"
          className="bg-orangeTwo whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              { ...eachElement[0], id: generateUniqueId() },
            ]);
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
          className="bg-yellowFunf whitespace-nowrap !w-auto"
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
                index: hasInput?.length == 1 ? 2 : 1,
                id: generateUniqueId(),
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
        <LevelComplete level="1" onNextLevel={onComplete} onGoHome={goHome} />
      </Modal>
    </>
  );
};

export default LevelOne;
