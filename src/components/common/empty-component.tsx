import { Button } from "./button.component";
import { Idea } from "@/assets";

interface EmptyComponentProps {
  title: string;
  desc: string;
  onClick: () => void;
  title_button: string;
}

const EmptyComponent = ({
  title,
  desc,
  onClick,
  title_button,
}: EmptyComponentProps) => {
  return (
    <div className="flex items-center justify-center text-black w-full">
      <div className="  bg-pinkLightTwo rounded-2xl flex flex-col items-center justify-center min-h-[600px]  gap-4">
        <Idea />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="w-[50%]">{desc}</p>
        <Button
          className="!w-auto !rounded-full !text-base"
          text={title_button}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default EmptyComponent;
