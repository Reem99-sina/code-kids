import { Dinosaur, Earth } from "@/assets";
import { ReactNode } from "react";

const MainComponentInfor = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col h-auto w-full bg-white">
      <div className="bg-[url('/header-add-child.png')] bg-center bg-cover w-full min-h-[300px] bg-blackPurple flex items-center justify-center text-white relative">
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-bold">{title}</h3>
          <div className="flex items-center gap-3 text-white font-bold">
            <p>Home</p>
            <Earth />
            <p>{title}</p>
          </div>
        </div>
        <Dinosaur className="absolute bottom-0 left-0" />
      </div>
      {children}
    </div>
  );
};

export default MainComponentInfor;
