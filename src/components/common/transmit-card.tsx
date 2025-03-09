import { ArrowRight } from "@/assets";
import React, { JSX } from "react";

interface TransmitCardProps {
  title: string;
  icons?: { icon: JSX.Element; label: string }[];
  buttonText: string;
  onButtonClick: () => void;
  conductorColor?: string;
}

export const TransmitCard: React.FC<TransmitCardProps> = ({
  title,
  buttonText,
  onButtonClick,
  icons = [],
  conductorColor = "#00B4EF",
}) => {
  return (
    <div className="bg-[#FFE5F3] w-[250px] h-[215px] flex flex-col rounded-xl shadow-lg overflow-hidden">
      <p className="text-lg font-semibold text-gray-800 text-center mt-3">
        {title}
      </p>

      <div className="flex justify-center items-center flex-grow space-x-3">
        {icons.map(({ icon, label }, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex justify-center items-center mb-2 text-3xl text-gray-700">
                {icon}
              </div>
              <p className="text-xs font-medium text-gray-700 mt-1">{label}</p>
            </div>

            {index < icons.length - 1 && (
              <div className="w-6 h-6 flex justify-center items-center">
                <ArrowRight />
              </div>
            )}

            {index === 0 && (
              <>
                <div className="flex flex-col items-center">
                  <div
                    className="w-[34px] h-[38px] rounded-lg"
                    style={{ backgroundColor: conductorColor }}
                  />
                  <p className="text-xs font-medium text-gray-700 mt-1">
                    Conductor
                  </p>
                </div>

                <div className="w-6 h-6 flex justify-center items-center">
                  <ArrowRight />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={onButtonClick}
        className="w-full bg-[#FFA6D6] text-[#0E0226] font-bold text-base py-2 rounded-b-xl hover:bg-pink-600 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};
