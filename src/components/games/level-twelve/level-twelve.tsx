import {Button} from "@/components/common/button.component";
import {
  BoxInterface,
  componentInputProps,
  dotInfo,
  eachElement,
  generateUniqueId,
  LineDirection,
  mouseMove,
  useLineInBoxRemove,
  useOutput,
} from "@/utils/logic.util";
import {FunctionComponent, useMemo, useRef, useState} from "react";
import {motion} from "framer-motion";
import IconDots from "../icon-dots";
import {LampOff, LampOn} from "@/assets";
import {Modal, ModalRef} from "@/components/common/modal.component";
import {LevelComplete} from "@/components/levels/LevelComplete";
import {useNavigate} from "react-router-dom";

interface LevelEightProps {
  onComplete: () => void;
  goHome: () => void;
}

const LevelTwelve: React.FC<LevelEightProps> = ({goHome}) => {
  const modalRef = useRef<ModalRef>(null);
  const router = useNavigate();
  const [binary, setBinary] = useState({input_1: 0, input_2: 0});
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
          {from: startDot, to: {...dot, ...mousePos, input, box: box}},
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

  const lineColor = useMemo(() => {
    return (line?: LineDirection) =>
      line?.from?.input
        ? binary[line?.from?.input as keyof typeof binary] == 1
          ? "green"
          : "red"
        : line?.to?.input
          ? binary[line?.to?.input as keyof typeof binary] == 1
            ? "green"
            : "red"
          : line?.from?.direction == "center"
            ? line?.to?.direction == "top"
              ? line?.to?.box?.repeat == 2
                ? useOutput({
                    input_1: binary["input_1"],
                    input_2: binary["input_2"],
                    operation: "nand",
                  }) == 1
                  ? "green"
                  : "red"
                : line?.to?.box?.repeat == 3
                  ? useOutput({
                      input_1: useOutput({
                        input_1: binary["input_1"],
                        input_2: binary["input_2"],
                        operation: "nand",
                      }),
                      input_2: useOutput({
                        input_1: binary["input_1"],
                        input_2: binary["input_2"],
                        operation: "nand",
                      }),
                      operation: "nand",
                    }) == 1
                    ? "green"
                    : "red"
                  : "red"
              : line?.to?.direction == "bottom"
                ? line?.to?.box?.repeat == 2
                  ? useOutput({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                      operation: "nand",
                    }) == 1
                    ? "green"
                    : "red"
                  : line?.to?.box?.repeat == 3
                    ? useOutput({
                        input_1: useOutput({
                          input_1: binary["input_1"],
                          input_2: binary["input_2"],
                          operation: "nand",
                        }),
                        input_2: useOutput({
                          input_1: binary["input_1"],
                          input_2: binary["input_2"],
                          operation: "nand",
                        }),
                        operation: "nand",
                      }) == 1
                      ? "green"
                      : "red"
                    : "red"
                : line?.to?.direction == "center"
                  ? useOutput({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                      operation: "xor",
                    }) == 1
                    ? "green"
                    : "red"
                  : "red"
            : "red";
  }, [binary]);

  const validateConnections = () => {};

  const hasLine = useMemo(() => {
    return ({dot, direction}: {dot: BoxInterface; direction: string}) => {
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

  return (
    <>
      <div
        className="relative w-full  bg-gray-100"
        onMouseMove={handleMouseMove}>
        <div
          className="bg-purpleLight min-h-[380px] w-full "
          ref={constraintsRef}>
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
                key={index}>
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
                      onClick={({event, dot}) =>
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
                            useOutput({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                              operation: "xor",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                          side: "left",
                        },
                      ]}
                      onClick={({dot, event}) =>
                        handleDotClick({dot, event, box: ele})
                      }
                    />
                  ) : ele?.title == "xor" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color:
                            binary[
                              (hasLine({dot: ele, direction: "top"})?.from
                                ?.input as keyof typeof binary) || "input_1"
                            ] == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color:
                            binary[
                              (hasLine({dot: ele, direction: "bottom"})?.from
                                ?.input as keyof typeof binary) || "input_2"
                            ] == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color:
                            useOutput({
                              input_1:
                                binary[
                                  (hasLine({dot: ele, direction: "top"})?.from
                                    ?.input as keyof typeof binary) || "input_1"
                                ],
                              input_2:
                                binary[
                                  (hasLine({dot: ele, direction: "bottom"})
                                    ?.from?.input as keyof typeof binary) ||
                                    "input_2"
                                ],
                              operation: "xor",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={({dot, event}) =>
                        handleDotClick({dot, event, box: ele})
                      }
                    />
                  ) : ele?.repeat == 0 && ele?.title == "nand" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color:
                            binary[
                              (hasLine({dot: ele, direction: "top"})?.from
                                ?.input as keyof typeof binary) || "input_1"
                            ] == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color:
                            binary[
                              (hasLine({dot: ele, direction: "bottom"})?.from
                                ?.input as keyof typeof binary) || "input_2"
                            ] == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color:
                            useOutput({
                              input_1:
                                binary[
                                  (hasLine({dot: ele, direction: "top"})?.from
                                    ?.input as keyof typeof binary) || "input_1"
                                ],
                              input_2:
                                binary[
                                  (hasLine({dot: ele, direction: "bottom"})
                                    ?.from?.input as keyof typeof binary) ||
                                    "input_2"
                                ],
                              operation: "nand",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={({dot, event}) =>
                        handleDotClick({dot, event, box: ele})
                      }
                    />
                  ) : ele?.repeat == 1 && ele?.title == "nand" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color:
                            binary[
                              (hasLine({dot: ele, direction: "top"})?.from
                                ?.input as keyof typeof binary) || "input_1"
                            ] == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color:
                            binary[
                              (hasLine({dot: ele, direction: "bottom"})?.from
                                ?.input as keyof typeof binary) || "input_2"
                            ] == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color:
                            useOutput({
                              input_1:
                                binary[
                                  (hasLine({dot: ele, direction: "top"})?.from
                                    ?.input as keyof typeof binary) || "input_1"
                                ],
                              input_2:
                                binary[
                                  (hasLine({dot: ele, direction: "bottom"})
                                    ?.from?.input as keyof typeof binary) ||
                                    "input_2"
                                ],
                              operation: "nand",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={({dot, event}) =>
                        handleDotClick({dot, event, box: ele})
                      }
                    />
                  ) : ele?.repeat == 2 && ele?.title == "nand" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color:
                            useOutput({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                              operation: "nand",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color:
                            useOutput({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                              operation: "nand",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color:
                            useOutput({
                              input_1: useOutput({
                                input_1: binary["input_1"],
                                input_2: binary["input_2"],
                                operation: "nand",
                              }),
                              input_2: useOutput({
                                input_1: binary["input_1"],
                                input_2: binary["input_2"],
                                operation: "nand",
                              }),
                              operation: "nand",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={({dot, event}) =>
                        handleDotClick({dot, event, box: ele})
                      }
                    />
                  ) : ele?.repeat == 3 && ele?.title == "nand" ? (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color:
                            useOutput({
                              input_1: useOutput({
                                input_1: binary["input_1"],
                                input_2: binary["input_2"],
                                operation: "nand",
                              }),
                              input_2: useOutput({
                                input_1: binary["input_1"],
                                input_2: binary["input_2"],
                                operation: "nand",
                              }),
                              operation: "nand",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color:
                            useOutput({
                              input_1: useOutput({
                                input_1: binary["input_1"],
                                input_2: binary["input_2"],
                                operation: "nand",
                              }),
                              input_2: useOutput({
                                input_1: binary["input_1"],
                                input_2: binary["input_2"],
                                operation: "nand",
                              }),
                              operation: "nand",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color:
                            useOutput({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                              operation: "xor",
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={({dot, event}) =>
                        handleDotClick({dot, event, box: ele})
                      }
                    />
                  ) : (
                    <IconDots
                      direction_dots_true={[
                        {
                          direction: "top",
                          color:
                            useOutput({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                              operation: ele?.title,
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "bottom",
                          color:
                            useOutput({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                              operation: ele?.title,
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                        {
                          direction: "center",
                          color:
                            useOutput({
                              input_1: binary["input_1"],
                              input_2: binary["input_2"],
                              operation: ele?.title,
                            }) == 1
                              ? "green"
                              : "red",
                          id: ele?.id,
                        },
                      ]}
                      onClick={({dot, event}) =>
                        handleDotClick({dot, event, box: ele})
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
                            setBinary((prev) => ({...prev, [id]: value}))
                          }
                          key={index}
                        />
                      );
                    })()
                  ) : ele?.title == "lamp-off" || ele?.title == "lamp-on" ? (
                    useOutput({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                      operation: "xor",
                    }) == 1 ? (
                      <LampOn />
                    ) : (
                      <LampOff />
                    )
                  ) : ele?.repeat == 0 && ele?.title == "nand" ? (
                    useOutput({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                      operation: ele?.title,
                    }) == 1 ? (
                      Reverse ? (
                        <Reverse className="w-16 h-16" />
                      ) : (
                        <></>
                      )
                    ) : (
                      <Icon className="w-16 h-16" />
                    )
                  ) : ele?.repeat == 1 && ele?.title == "nand" ? (
                    useOutput({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                      operation: ele?.title,
                    }) == 1 ? (
                      Reverse ? (
                        <Reverse className="w-16 h-16" />
                      ) : (
                        <></>
                      )
                    ) : (
                      <Icon className="w-16 h-16" />
                    )
                  ) : ele?.repeat == 2 && ele?.title == "nand" ? (
                    useOutput({
                      input_1: useOutput({
                        input_1: binary["input_1"],
                        input_2: binary["input_2"],
                        operation: ele?.title,
                      }),
                      input_2: useOutput({
                        input_1: binary["input_1"],
                        input_2: binary["input_2"],
                        operation: ele?.title,
                      }),
                      operation: ele?.title,
                    }) == 1 ? (
                      Reverse ? (
                        <Reverse className="w-16 h-16" />
                      ) : (
                        <></>
                      )
                    ) : (
                      <Icon className="w-16 h-16" />
                    )
                  ) : ele?.repeat == 3 && ele?.title == "nand" ? (
                    useOutput({
                      input_1: binary["input_1"],

                      input_2: binary["input_2"],
                      operation: "xor",
                    }) == 1 ? (
                      Reverse ? (
                        <Reverse className="w-16 h-16" />
                      ) : (
                        <></>
                      )
                    ) : (
                      <Icon className="w-16 h-16" />
                    )
                  ) : useOutput({
                      input_1: binary["input_1"],
                      input_2: binary["input_2"],
                      operation: ele?.title,
                    }) == 1 ? (
                    Reverse ? (
                      <Reverse className="w-16 h-16" />
                    ) : (
                      <></>
                    )
                  ) : (
                    <Icon className="w-16 h-16" />
                  )}
                </div>

                {visible == 0 && (
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
                initial={{x2: line?.from.x, y2: line?.from.y}}
                animate={{x2: line?.to.x, y2: line?.to.y}}
                transition={{duration: 0.4, ease: "easeOut"}}
                stroke={lineColor(line)}
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
            setBoxes((prev) => [
              ...prev,
              {...eachElement[0], id: generateUniqueId()},
            ]);
          }}
        />
        <Button
          text="Create QR Gate"
          className="bg-blueGreenCustom whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              {...eachElement[1], id: generateUniqueId()},
            ]);
          }}
        />

        <Button
          text="Create NOT Gate"
          className="bg-yellow-300 whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              {...eachElement[5], id: generateUniqueId()},
            ]);
          }}
        />

        <Button
          text="Create LAMP"
          className="bg-orangeLight whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              {...eachElement[2], id: generateUniqueId()},
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
          text="Check Logic"
          className="bg-green-600 text-white !w-auto"
          onClick={validateConnections}
        />
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <Button
          text="Create xor Gate"
          className="bg-red-500 whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              {
                ...eachElement[6],
                id: generateUniqueId(),
              },
            ]);
          }}
        />
        <Button
          text="Create Nor Gate"
          className="bg-green-500 whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [
              ...prev,
              {
                ...eachElement[5],
                id: generateUniqueId(),
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
      </div>
      <Modal ref={modalRef}>
        <LevelComplete
          level="10"
          onNextLevel={() => router("/assembly-game")}
          onGoHome={goHome}
        />
      </Modal>
    </>
  );
};

export default LevelTwelve;
