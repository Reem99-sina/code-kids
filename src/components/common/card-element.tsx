import clsx from "clsx";
import { FC, ReactNode } from "react";

interface TransmitCardProps {
  title: string;
  desc?: string;
  children?: ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}
const CardElement: FC<TransmitCardProps> = ({
  title,
  desc,
  onButtonClick,
  buttonText,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "bg-purpleLight  h-[233px] flex flex-col rounded-xl shadow-lg overflow-hidden ",
        className
      )}
    >
      <p className="text-lg font-semibold text-gray-800 text-center mt-3">
        {title}
      </p>
      <p className="text-xs">{desc}</p>

      <div className="flex justify-center items-center  space-x-3">
        {children}
      </div>
      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="mt-auto w-full bg-purpleTwo text-blackPurple font-bold text-base py-2 rounded-b-xl hover:bg-pink-600 transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CardElement;
