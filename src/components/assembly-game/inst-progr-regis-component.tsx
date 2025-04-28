import { ReactNode, useEffect, useState } from "react";
import { Line } from "../common/line.component";
import { onChangeInstrustion } from "./main-component";
import { Button } from "../common/button.component";
import { TextInput } from "../common/form/text-input.component";
import { X } from "lucide-react";

const InstProgrRegisComponent = ({ children }: { children: ReactNode }) => {
  return <div className="  flex gap-4">{children}</div>;
};

export default InstProgrRegisComponent;

const InstructionComponent = ({
  instructions,
  onChange,
  onClick,
  onProgress,
}: {
  instructions: string[];
  onChange: (props: onChangeInstrustion) => void;
  onClick: (value: string) => void;
  onProgress: (value: number) => void;
}) => {
  const [open, setOpen] = useState<string | undefined>();
  const [clicks, setClicks] = useState(0);
  const [operands, setOperands] = useState<{
    operand_1: string | undefined;
    operand_2?: string | undefined;
  }>(
    open?.startsWith("J")
      ? { operand_1: undefined }
      : {
          operand_1: undefined,
          operand_2: undefined,
        }
  );

  const handleClick = () => {
    if (clicks < 3) {
      onProgress(5);
      setClicks(clicks + 1);
    }
  };

  useEffect(() => {
    setOperands(
      open?.startsWith("J") || open?.startsWith("L")
        ? { operand_1: undefined }
        : {
            operand_1: undefined,
            operand_2: undefined,
          }
    );
  }, [instructions, open]);

  return (
    <div className=" flex-[0.5] bg-pinkLightFour p-6 rounded-2xl flex flex-col gap-5 min-h-[420px] text-start">
      <h3 className="text-2xl font-bold">Instuctions</h3>
      <Line className="bg-pinkOne" />
      <div className="flex items-center gap-2 flex-wrap">
        {instructions?.map((ele) => (
          <Button
            text={ele}
            className="!bg-blueThree text-white px-6 py-2 !w-auto"
            onClick={() => {
              setOpen(ele);
            }}
            key={ele}
          />
        ))}
      </div>
      {open && (
        <div className="bg-[#FFDCED] p-2 rounded-lg text-start">
          <h3 className="text-lg font-bold mb-2">
            Enter operand(s) for {open}
          </h3>
          {open?.startsWith("J") ||
          open?.startsWith("L") ||
          open?.startsWith("P") ? (
            <div className="flex gap-2">
              <TextInput
                className="!rounded-lg !py-2 !px-3  "
                inputProps={{
                  placeholder: "Enter ",
                  value: operands?.operand_1,
                  onChange: (event) => {
                    onChange({
                      operation: open,
                      key: "operand_1",
                      value: event?.target?.value,
                    });

                    setOperands((prev) => ({
                      ...prev,
                      operand_1: event?.target?.value,
                    }));
                  },
                }}
              />
            </div>
          ) : (
            <div className="flex gap-2">
              <TextInput
                className="!rounded-lg !py-2 !px-3  "
                inputProps={{
                  placeholder: "Enter Ax",
                  value: operands?.operand_1,
                  onChange: (event) => {
                    onChange({
                      operation: open,
                      key: "operand_1",
                      value: event?.target?.value,
                    });
                    setOperands((prev) => ({
                      ...prev,
                      operand_1: event?.target?.value,
                    }));
                  },
                }}
              />
              <TextInput
                className="!rounded-lg !py-2 !px-3 "
                inputProps={{
                  placeholder: "Enter bx",
                  value: operands?.operand_2,

                  onChange: (event) => {
                    onChange({
                      operation: open,
                      key: "operand_2",
                      value: event?.target?.value,
                    });
                    setOperands((prev) => ({
                      ...prev,
                      operand_2: event?.target?.value,
                    }));
                  },
                }}
              />
            </div>
          )}
          <Button
            text={open}
            className="!bg-[#76C75E] !px-6 !py-2 !text-white !w-auto !text-base !mt-6"
            onClick={() => {
              onClick(open);
              setOpen(undefined);
            }}
          />
        </div>
      )}
      <div className="mt-auto flex flex-col gap-3">
        <Button
          className="!bg-[#EAB308] !text-white !text-base !w-auto !px-4 !py-3"
          text="Get Hint (-5 pets)"
          onClick={handleClick}
          disabled={clicks >= 3}
        />
        <Button
          className="!bg-[#E66F13] !text-white !text-base !w-auto !px-4 !py-3"
          text="See Solution (-70 pets)"
          onClick={() => onProgress(70)}
        />
      </div>
    </div>
  );
};

const ProgramComponent = ({
  programs,
  onDelete,
}: {
  programs: string[];
  onDelete: (props: string) => void;
}) => {
  return (
    <div className=" bg-pinkLightFour p-6 rounded-2xl flex flex-col gap-5 min-h-[420px] text-start flex-1">
      <h3 className="text-2xl font-bold">Program</h3>
      <Line className="bg-pinkOne" />
      <div className="flex items-center gap-2 text-start flex-col">
        {programs?.map((ele) => (
          <Button
            text={ele}
            className="!bg-[#FFDCED] !text-black !px-8 !py-2 !text-base !font-normal !justify-start"
            endIcon={
              <X
                className="!text-red-500 ms-auto"
                onClick={() => onDelete(ele)}
              />
            }
            key={ele}
          />
        ))}
      </div>
    </div>
  );
};

const RegisterComponent = ({
  Registers,
  flags,
}: {
  Registers: { title: string; value: number }[];
  flags: { title: string; value: number }[];
}) => {
  return (
    <div className=" bg-pinkLightFour p-6 rounded-2xl flex flex-col gap-5 min-h-[420px] text-start flex-[0.5]">
      <h3 className="text-2xl font-bold">Registers</h3>
      <Line className="bg-pinkOne" />
      <div className="flex items-start gap-2 flex-col ">
        <h3 className="text-lg font-bold ">Registers</h3>
        <div className="flex items-start gap-2">
          {Registers?.map((ele) => (
            <div
              key={ele?.title}
              className="bg-white rounded-lg py-4 px-3 text-black text-sm font-bold"
            >
              <h3 className="text-[#757575]">{ele?.title}..</h3>
              <p>{ele?.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-2 flex-col ">
        <h3 className="text-lg font-bold ">Flags</h3>
        <div className="flex items-start gap-2">
          {flags?.map((ele) => (
            <div
              key={ele?.title}
              className="bg-white rounded-lg py-4 px-3 text-black text-sm font-bold"
            >
              <h3 className="text-[#757575]">{ele?.title}..</h3>
              <p>{ele?.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { InstructionComponent, ProgramComponent, RegisterComponent };
