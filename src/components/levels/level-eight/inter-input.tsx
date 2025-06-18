import { ArrowRightDots } from "@/assets";
import { Button } from "@/components/common/button.component";
import { useFormContext } from "react-hook-form";

interface props {
  title: string;
  level: number;
  nameOfForm: string;
}
const InterInput = ({ title, level, nameOfForm }: props) => {
  const { setValue, watch } = useFormContext();
  const selected = watch(nameOfForm) ?? Array(level).fill(0);

  const handleToggle = (index: number) => {
    const current = watch(nameOfForm) ?? Array(level).fill(0); // get current array or initialize
    const updated = [...current];
    updated[index] = updated[index] == 0 ? 1 : 0;

    // Convert to string

    const asString = updated.join("");
    setValue(nameOfForm, asString);
  };

  return (
    <div className="flex items-center gap-4  justify-center ">
      <div className="">
        <div className="flex items-center gap-2">
          {Array.from({ length: level }, (_, index) => (
            <Button
              key={index}
              text={`${selected[index]}`}
              onClick={() => handleToggle(index)}
              className={"bg-pinkTwo text-black px-4"}
            />
          ))}
        </div>
      </div>
      <ArrowRightDots />
      <div>
        <p className="text-xs whitespace-nowrap">{title}</p>
      </div>
    </div>
  );
};

export default InterInput;
