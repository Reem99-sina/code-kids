import { ArrowRightDots } from "@/assets";
import { useFormContext } from "react-hook-form";
import VerificationInput from "react-verification-input";

interface props {
  title: string;
  level: number;
  nameOfForm: string;
}
const InterInput = ({ title, level, nameOfForm }: props) => {
  const { setValue,watch } = useFormContext();
  const name=watch(nameOfForm)

  return (
    <div className="flex items-center gap-4  justify-center ">
      <div className="" style={{ direction: "rtl" }}>
        <VerificationInput
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
        />
      </div>
      <ArrowRightDots />
      <div>
        <p className="text-xs whitespace-nowrap">{title}</p>
      </div>
    </div>
  );
};

export default InterInput;
