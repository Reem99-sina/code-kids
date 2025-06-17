import { Button } from "@/components/common/button.component";

import { useFormContext } from "react-hook-form";
// import VerificationInput from "react-verification-input";

interface props {
  level: number;
  nameOfForm: string;
}
const InterInput = ({ level, nameOfForm }: props) => {
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
      <div className="flex items-center gap-2">
        {Array.from({ length: level }, (_, index) => (
          <Button
            key={index}
            text={`${selected[index]}`}
            onClick={() => handleToggle(index)}
            className={"bg-pinkTwo text-black px-4"}
          />
        ))}

        {/* <VerificationInput
          classNames={{
            container: "container gap-5 my-2  ",
            character:
              "rounded-sm border-0 bg-pinkTwo !w-10 h-10 flex items-center justify-center text-lg",
            characterInactive: "",
            characterSelected: "bg-pinkTwo",
            characterFilled: "bg-pinkTwo",
          }}
          length={level}
          placeholder="-"
          value={name?.split("")?.reverse()?.join("")}
          onChange={(value) =>
            setValue(nameOfForm, value.split("").reverse().join(""))
          }
        /> */}
      </div>
    </div>
  );
};

export default InterInput;
