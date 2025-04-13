import { Button } from "@/components/common/button.component";
import { eachElement } from "@/utils/logic.util";
import { FunctionComponent, SVGProps, useRef, useState } from "react";
import { motion } from "framer-motion";
import IconDots from "../icon-dots";
import { LampOff, LampOn, Nand } from "@/assets";

interface componentInputProps {
  value?: number;
  onChange?: (value: number) => void;
}
interface box {
  Icon:
    | FunctionComponent<SVGProps<SVGSVGElement>>
    | FunctionComponent<componentInputProps>;
  id: number;
  title: string;
  Reverse?: FunctionComponent<SVGProps<SVGSVGElement>>;
}
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

const LevelFive = () => {
  const [binary, setBinary] = useState({ input_1: 0, input_2: 0 });
  const constraintsRef = useRef<HTMLDivElement>(null);
  const rect = constraintsRef?.current?.getBoundingClientRect();
  const [visible, setVisible] = useState<number | undefined>();
  const [boxes, setBoxes] = useState<box[]>([]);
  const [lines, setLines] = useState<(LineDirection | undefined)[]>([]); // Final lines
  const [startDot, setStartDot] = useState<dotInfo | null>(null); // Starting dot
  const [mousePos, setMousePos] = useState<mouseMove | null>(null); // For live line

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

  const output = ({
    input_1,
    input_2,
  }: {
    input_1: number;
    input_2: number;
  }) => {
    return (input_1 == 0 && input_2 == 0) || input_1 != input_2 ? 1 : 0;
  };

  return (
    <>
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
                            binary[index + 1 == 1 ? "input_1" : "input_2"] == 1
                              ? "green"
                              : "red",
                          id: index + 1,
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
                          id: index + 3,
                          leftOrRight: "left",
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
                          id: index + 1,
                        },
                        {
                          direction: "bottom",
                          color: binary["input_1"] == 1 ? "green" : "red",
                          id: index + 2,
                        },
                        {
                          direction: "center",
                          color: output({
                            input_1: binary["input_1"],
                            input_2: binary["input_2"],
                          })
                            ? "green"
                            : "red",
                          id: index + 3,
                        },
                      ]}
                      onClick={handleDotClick}
                    />
                  )}

                  {ele?.title == "input" ? (
                    (() => {
                      const Component =
                        Icon as FunctionComponent<componentInputProps>;
                      const id = index + 1 == 1 ? "input_1" : "input_2";
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
      <div className="flex items-center gap-3">
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
            setBoxes((prev) => [...prev, { ...eachElement[1] }]);
          }}
        />
        <Button
          text="Create NOT Gate"
          className="bg-yellowFunf  whitespace-nowrap !w-auto"
        />
        <Button
          text="Create LAMP"
          className="bg-orangeLight whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [...prev, { ...eachElement[2] }]);
          }}
        />
        <Button
          text="Create INPUT"
          className="bg-purpleEight whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [...prev, { ...eachElement[3] }]);
          }}
        />
        <Button
          text="Create NAND Gate"
          className="bg-purpleNine whitespace-nowrap text-white !w-auto"
          onClick={() => {
            setBoxes((prev) => [...prev, { ...eachElement[4] }]);
          }}
        />
      </div>
    </>
  );
};

export default LevelFive;
