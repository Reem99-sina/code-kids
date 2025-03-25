import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="p-4 rounded-2xl shadow-md bg-white transition-colors py-10 px-4  duration-300 hover:bg-[#35005E] hover:text-white text-center">
      <div className="flex justify-center mb-2 ">{icon}</div>
      <div className="max-w-[220px]">
        <p className="font-bold  text-xl ">{title}</p>
      </div>
    </div>
  );
};
