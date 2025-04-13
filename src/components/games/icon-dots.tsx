import clsx from "clsx";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { dotInfo } from "./level-one/level-one";

interface DirectionDots {
  direction: "top" | "bottom" | "center";
  color: "green" | "red";
  id: number;
  side?: "left" | "right";
}

interface Props {
  event: React.MouseEvent<HTMLDivElement>;
  dot: dotInfo;
}

const IconDots = ({
  direction_dots_true,
  onClick,
}: {
  direction_dots_true: DirectionDots[];
  onClick: ({ event, dot }: Props) => void;
}) => {
  const positionedDots = useMemo(() => {
    return direction_dots_true.map((dot) => {
      const isLeft = dot.side === "left";
      const isCenter = dot.direction === "center";
      const isBottom = dot.direction === "bottom";

      const positionClasses = clsx(
        "absolute w-4 h-4 rounded-full",
        dot.color === "green" ? "bg-greenTwo" : "bg-redTwo",
        {
          "-left-5 top-6": isCenter && isLeft,
          "-right-5 top-6": isCenter && !isLeft,
          "-left-5": !isCenter && !isBottom && !isLeft,
          "-left-5 bottom-0": !isCenter && isBottom && !isLeft,
        }
      );

      return {
        ...dot,
        positionClasses,
      };
    });
  }, [direction_dots_true]);

  return (
    <div>
      {positionedDots.map((dot) => (
        <motion.div
          key={dot.id}
          className={dot.positionClasses}
          onClick={(event) =>
            onClick({
              event,
              dot: {
                ...dot,
                x: event.clientX,
                y: event.clientY,
              },
            })
          }
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
};

export default IconDots;
