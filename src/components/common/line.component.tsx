import clsx from "clsx";
import { FC } from "react";

interface Props {
  color?: string;
  className?: string;
}

export const Line: FC<Props> = ({ color, className }) => {
  return (
    <div
      className={clsx("h-[1px] w-full bg-gray-200", className)}
      style={color ? { backgroundColor: color } : {}}
    />
  );
};
