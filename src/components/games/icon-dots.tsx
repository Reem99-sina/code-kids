import clsx from "clsx";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { dotInfo } from "./level-one/level-one";

interface DirectionDots {
  direction: "top" | "bottom" | "center";
  leftOrRight?: "left" | "right";
  color: "green" | "red";
  id: number;
}
interface props {
  event: React.MouseEvent<HTMLDivElement>;
  dot: dotInfo;
}

const IconDots = ({
  direction_dots_true,
  onClick,
}: {
  direction_dots_true: DirectionDots[];
  onClick: ({ event, dot }: props) => void;
}) => {
  const rightDots = useMemo(() => {
    return direction_dots_true?.filter((ele) => ele?.direction == "center");
  }, [direction_dots_true]);

  const leftDots = useMemo(() => {
    return direction_dots_true?.filter(
      (ele) => ele?.direction == "top" || ele?.direction == "bottom"
    );
  }, [direction_dots_true]);

  return (
    <div className="">
      {leftDots?.map((ele) => (
        <motion.div
          className={clsx(
            "absolute w-4 h-4 rounded-full -left-5",
            ele?.color == "green" ? "bg-greenTwo" : "bg-redTwo",
            ele?.direction == "bottom" ? "bottom-0" : ""
          )}
          key={ele?.id}
          onClick={(event) =>
            onClick({
              event: event,
              dot: {
                ...ele,
                x: event?.clientX,
                y: event?.clientY,
              
              },
            })
          }
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
      ))}
      {rightDots?.map((ele) => (
        <motion.div
          className={clsx(
            "absolute w-4 h-4 rounded-full  top-6",
            ele?.color == "green" ? "bg-greenTwo" : "bg-redTwo",
            ele?.leftOrRight == "left" ? "-left-5" : "-right-5"
          )}
          key={ele?.id}
          onClick={(event) =>
            onClick({
              event: event,
              dot: {
                ...ele,
                x: event?.clientX,
                y: event?.clientY,
              
              },
            })
          }
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
      ))}
    </div>
  );
};

export default IconDots;
