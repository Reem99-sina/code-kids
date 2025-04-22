import { Goal } from "@/assets";

const GoalComponent = ({
  message,
  title,
}: {
  message: string;
  title: string;
}) => {
  return (
    <div className=" bg-blueLightThree px-6 rounded-lg py-2 flex gap-6 w-full items-center">
      <Goal />
      <div className="flex flex-col gap-2 justify-start items-start">
        <h3 className="text-lg font-bold">{title}:</h3>
        <p className="text-base">{message}</p>
      </div>
    </div>
  );
};

export default GoalComponent;
