import { Button } from "@/components/common/button.component";
import {
  andOperation,
  BoxInterface,
  componentInputProps,
  dotInfo,
  eachElement,
  evaluateLogicWithTrace,
  generateUniqueId,
  useLineInBoxRemove,
} from "@/utils/logic.util";
import { FunctionComponent, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import IconDots from "../icon-dots";
import { Modal, ModalRef } from "@/components/common/modal.component";
import { LevelComplete } from "@/components/levels/LevelComplete";
import { LampOff, LampOn } from "@/assets";
import ModalReviewResult from "@/components/levels/Level-two/modal-review-result";

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
  const [startDot, setStartDot] = useState<dotInfo | null>(null); // Starting dot
  const [mousePos, setMousePos] = useState<mouseMove | null>(null);
  const modalRef = useRef<ModalRef>(null);
  const modalResultRef = useRef<ModalRef>(null);
  const [message, setMessage] = useState({
    title: "",
    desc: "",
  });

  const onClose = () => {
    setBoxes([]);
    setLines([]);
  };
  const handleDotClick = ({
    dot,
    input,
    box,
  }: {
    event: React.MouseEvent<HTMLDivElement>;
    dot: dotInfo;
    input?: string;
    box: BoxInterface;
  }) => {
    if (!rect) return;
    if (!startDot) {
      setStartDot({
        ...dot,
        x: dot.x - rect.left,
        y: dot.y - rect.top,
        input,
        box: box,
      });
    } else {
      if (dot.id !== startDot.id) {
        setLines([
          ...lines,
          { from: startDot, to: { ...dot, ...mousePos, input, box: box } },
        ]);
      }
      setStartDot(null);
      setMousePos(null);
    }
  };

  const hasLine = useMemo(() => {
    return ({ dot, direction }: { dot: BoxInterface; direction: string }) => {
      return {
        line: lines.find(
          (ele) => ele?.to?.id == dot?.id && ele?.to?.direction == direction
        ),
        from: lines.find(
          (ele) => ele?.to?.id == dot?.id && ele?.to?.direction == direction
        )?.from,
      };
    };
  }, [lines]);

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
      setMessage({
        title: "Game Over! ",
        desc: "Missing AND gate or Lamp.",
      });
      modalResultRef?.current?.open();
      onClose();

      return;
    }

    const inputsToAnd = connections.filter(
      (line) => line?.to.id === andGate?.id
    );

    const andToLamp = connections.find(
      (line) => line?.from.id === andGate?.id && line?.to.id === lamp?.id
    );

    const result = andOperation({
      input_1: binary["input_1"],
      input_2: binary["input_2"],
    });

    if (inputsToAnd.length > 1 && andToLamp && result == 1) {
      modalRef.current?.open();
    } else {
      setMessage({
        title: "Game Over! ",
        desc: "❌ Incorrect logic, try again.",
      });
      modalResultRef?.current?.open();
      onClose();
    }
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
            const lineBottom = hasLine({ dot: ele, direction: "bottom" });

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
                      onClick={({ event, dot }) =>
                        handleDotClick({
                          dot,
                          event,
                          input: `input_${ele?.index}`,
                          box: ele,
                        })
                      }
                    />
                  ) : ele?.title == "lamp-off" || ele?.title == "lamp-on" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "center",
                          color:
                            evaluateLogicWithTrace(ele, lines, binary)
                              ?.result == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                          side: "left",
                        },
                      ]}
                      onClick={({ dot, event }) =>
                        handleDotClick({ dot, event, box: ele })
                      }
                    />
                  ) : (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color:
                            evaluateLogicWithTrace(
                              ele,
                              lines,
                              binary
                            )?.trace?.find((elem) => elem?.boxId == ele?.id)
                              ?.inputs[0]?.value == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color:
                            lineBottom?.line?.to &&
                            evaluateLogicWithTrace(
                              ele,
                              lines,
                              binary
                            )?.trace?.find((elem) => elem?.boxId == ele?.id)
                              ?.inputs[1]?.value == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color:
                            evaluateLogicWithTrace(
                              ele,
                              lines,
                              binary
                            )?.trace?.find((elem) => elem?.boxId == ele?.id)
                              ?.result == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={({ dot, event }) =>
                        handleDotClick({ dot, event, box: ele })
                      }
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
                    evaluateLogicWithTrace(ele, lines, binary)?.trace?.find(
                      (elem) => elem?.boxId == ele?.id
                    )?.result == 1 ? (
                      <LampOn />
                    ) : (
                      <LampOff />
                    )
                  ) : evaluateLogicWithTrace(ele, lines, binary)?.trace?.find(
                      (elem) => elem?.boxId == ele?.id
                    )?.result == 1 ? (
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
                  line?.from?.direction == "bottom"
                    ? binary["input_2"] == 1
                      ? "green"
                      : "red"
                    : line?.from?.direction == "top"
                      ? binary["input_1"] == 1
                        ? "green"
                        : "red"
                      : line?.from?.box &&
                          evaluateLogicWithTrace(line?.from?.box, lines, binary)
                            ?.result == 1
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

export default LevelOne;
