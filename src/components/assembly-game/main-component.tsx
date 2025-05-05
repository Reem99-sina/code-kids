import { AppearIcon, ClockYellow } from "@/assets";
import ProgressBar from "../common/ProgressBar";
import { useCallback, useRef, useState } from "react";
import GoalComponent from "./goal-component";
import InstProgrRegisComponent, {
  InstructionComponent,
  ProgramComponent,
  RegisterComponent,
} from "./inst-progr-regis-component";
import { Button } from "../common/button.component";
import { checkRegisterTrue, executeInstruction } from "@/utils/assebly.util";
import { Modal, ModalRef } from "../common/modal.component";
import { LevelComplete } from "../levels/LevelComplete";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface instructionProps {
  title: string;
  operand_1?: string;
  operand_2?: string;
}
export interface MemoyProps {
  address: string;
  value: number;
}
export interface onChangeInstrustion {
  operation: string;
  key: string;
  value: string;
}

interface handleExecuteInterface {
  program: string[];
  registers: { title: string; value: number }[];
  flags: { title: string; value: number }[];
}
const levels = [
  {
    name: "level_1",
    desc: "Move the value from BX to AX",
    instruction: ["MOV"],
    registers: [
      { title: "AX", value: 0 },
      { title: "BX", value: 5 },
    ],
    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [
        { title: "AX", value: 5 },
        { title: "BX", value: 5 },
      ],
      program: ["MOV BX AX"],
    },
  },
  {
    name: "level_2",
    desc: "Add the values in AX and BX ,store the result in AX",
    instruction: ["MOV", "ADD"],
    registers: [
      { title: "AX", value: 3 },
      { title: "BX", value: 2 },
    ],
    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [
        { title: "AX", value: 5 },
        { title: "BX", value: 2 },
      ],
      program: ["ADD BX AX"],
    },
  },
  {
    name: "level_2",
    desc: "Load the value from memory address 10 into AX , then subtract 2",
    instruction: ["MOV", "ADD", "SUB"],
    registers: [{ title: "AX", value: 1 }],
    memory: [{ address: "10", value: 5 }],
    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [{ title: "AX", value: 3 }],
      program: ["MOV AX [10]", "SUB AX 2"],
    },
  },
  {
    name: "level_3",
    desc: "Compare AX and BX . if they are equal,set CX to 1 , otherwise set CX to 0",
    instruction: [
      "MOV",
      "ADD",
      "SUB",
      "CMP",
      "JE",
      "JNE",
      "JMP",
      "LABEL",
      "PRINT",
    ],
    registers: [
      { title: "AX", value: 2 },
      { title: "BX", value: 3 },
      { title: "CX", value: 0 },
    ],
    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [
        { title: "AX", value: 2 },
        { title: "BX", value: 3 },
        { title: "CX", value: 0 },
      ],
      flags: [
        { title: "ZF", value: 0 },
        { title: "SF", value: 1 },
        { title: "CF", value: 1 },
      ],
      program: [
        "CMP AX BX",
        "JE equal",
        "MOV CX 0",
        "JMP end",
        "equal",
        "MOV CX 1",
        "end",
      ],
    },
  },
  {
    name: "level_4",
    desc: "Use BX as a counter, add 2 to AX for each iteration until BX reaches 0",
    instruction: ["MOV", "ADD", "SUB", "CMP", "JE", "JNE", "JMP", "LABEL"],
    registers: [
      { title: "AX", value: 2 },
      { title: "BX", value: 3 },
      { title: "CX", value: 0 },
    ],
    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [
        { title: "AX", value: 8 },
        { title: "BX", value: 0 },
        { title: "CX", value: 0 },
      ],
      flags: [
        { title: "ZF", value: 1 },
        { title: "SF", value: 0 },
        { title: "CF", value: 0 },
      ],
      program: ["loop", "CMP BX 0", "ADD AX 2", "SUB BX 1", "JMP loop", "end"],
    },
  },
  {
    name: "level_5",
    desc: "Push AX and BX to the stack , then pop them in reverse order into BX and AX",
    instruction: ["MOV", "PUSH", "POP"],
    registers: [
      { title: "AX", value: 5 },
      { title: "BX", value: 10 },
      { title: "CX", value: 0 },
      { title: "SP", value: 65535 },
    ],
    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [
        { title: "AX", value: 10 },
        { title: "BX", value: 5 },
        { title: "CX", value: 0 },
        { title: "SP", value: 65535 },
      ],
      flags: [
        { title: "ZF", value: 0 },
        { title: "SF", value: 0 },
        { title: "CF", value: 0 },
      ],
      program: ["PUSH AX", "PUSH BX", "POP AX", "POP BX"],
    },
  },
  {
    name: "level_6",
    desc: "Perform AND operation between AX and BX , store in CX",
    instruction: ["MOV", "AND", "OR", "XOR"],
    registers: [
      { title: "AX", value: 12 },
      { title: "BX", value: 10 },
      { title: "CX", value: 0 },
    ],
    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [
        { title: "AX", value: 12 },
        { title: "BX", value: 10 },
        { title: "CX", value: 8 },
      ],
      flags: [
        { title: "ZF", value: 0 },
        { title: "SF", value: 0 },
        { title: "CF", value: 0 },
      ],
      program: ["MOV CX AX", "AND CX BX"],
    },
  },
  {
    name: "level_7",
    desc: "Load values from three consecutive memory locations starting at address in BX,sum them in AX",
    instruction: ["MOV", "ADD", "LOAD", "STORE"],
    registers: [
      { title: "AX", value: 5 },
      { title: "BX", value: 100 },
      { title: "CX", value: 0 },
    ],
    memory: [
      { address: "100", value: 5 },
      { address: "101", value: 10 },
      { address: "102", value: 15 },
    ],
    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [
        { title: "AX", value: 30 },
        { title: "BX", value: 100 },
        { title: "CX", value: 15 },
      ],
      flags: [
        { title: "ZF", value: 0 },
        { title: "SF", value: 0 },
        { title: "CF", value: 0 },
      ],
      program: [
        "LOAD AX [BX]",
        "LOAD CX [101]",
        "ADD AX CX",
        "LOAD CX [102]",
        "ADD AX CX",
      ],
    },
  },
  {
    name: "level_8",
    desc: "Compare AX and BX,set CX to: 1 if AX > BX , -1 if AX < BX ,0 if equal ",
    instruction: ["MOV", "CMP", "JG", "JL", "JMP", "LABEL"],
    registers: [
      { title: "AX", value: 5 },
      { title: "BX", value: 10 },
      { title: "CX", value: 0 },
    ],

    flags: [
      { title: "ZF", value: 0 },
      { title: "SF", value: 0 },
      { title: "CF", value: 0 },
    ],
    result: {
      registers: [
        { title: "AX", value: 5 },
        { title: "BX", value: 10 },
        { title: "CX", value: -1 },
      ],
      flags: [
        { title: "ZF", value: 0 },
        { title: "SF", value: 1 },
        { title: "CF", value: 1 },
      ],
      program: [
        "CMP AX BX",
        "JG greater",
        "JL less",
        "MOV CX 0",
        "JMP end",
        "greater",
        "MOV CX 1",
        "JMP end",
        "less",
        "MOV CX -1",
        "end",
      ],
    },
  },
];

const MainComponent = ({ initLevel }: { initLevel?: number }) => {
  const modalRef = useRef<ModalRef>(null);
  const [level, setLevel] = useState(initLevel ? initLevel : 0);
  const [time] = useState(60);
  const router=useNavigate()
  const [progress, setProgress] = useState(100);
  const [hint, setHint] = useState("");
  const [solution, setSolution] = useState("");
  const [instruction, setInstruction] = useState<instructionProps[]>(
    levels[level]?.instruction?.map((ele) =>
      ele?.startsWith("J")
        ? {
            title: ele,
            operand_1: undefined,
          }
        : {
            title: ele,
            operand_1: undefined,
            operand_2: undefined,
          }
    )
  );
  const [program, setProgram] = useState<string[]>([]);
  const [memory, setMemory] = useState<MemoyProps[]>(
    levels[level]?.memory || []
  );

  const [register, setRegisters] = useState(levels[level]?.registers);
  const [flags, setFlags] = useState(levels[level]?.flags);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [maxHints] = useState(3);

  const onNextLevel = useCallback(() => {
    setLevel((prev) => prev + 1);
    addInitstate({ level: level + 1 });
    if(level==10){
      router("/")
    }
    modalRef?.current?.close();
  }, [level]);

  const addInitstate = ({ level }: { level: number }) => {
    setProgram([]);
    setRegisters(levels[level]?.registers);
    setFlags(levels[level]?.flags);
    setInstruction(
      levels[level]?.instruction?.map((ele) => ({
        title: ele,
      }))
    );
    setMemory(levels[level]?.memory || []);
  };

  const handleExecute = ({
    program,
    registers,
    flags,
  }: handleExecuteInterface) => {
    const index = 0;
    const resultRegisters = [...registers.map((r) => ({ ...r }))];
    const resultFlags = [...flags.map((f) => ({ ...f }))];
    const resultMemory = memory ? [...memory.map((f) => ({ ...f }))] : [];

    executeInstruction({
      index,
      program,
      resultFlags,
      resultRegisters,
      setMemory,
      memory: resultMemory,
    });
    setRegisters(resultRegisters);
    setFlags(resultFlags);
    setMemory(resultMemory);

    return {
      registers: resultRegisters,
      flags: resultFlags,
    };
  };

  return (
    <div className="flex flex-col text-white justify-start items-start mt-16 px-6">
      <h3 className="text-3xl font-bold mb-3">Coding for Kids</h3>
      <h3 className="text-2xl font-bold">
        Chapter 2: Binary Addition, Hexadecimal to binary
      </h3>
      <div className=" bg-white rounded-lg py-5 px-3 flex flex-col gap-4 w-full min-h-[500px] relative mt-6 justify-start items-center text-black">
        <AppearIcon className="absolute -right-1" />
        <div className="flex items-center gap-3">
          <ClockYellow />
          <p className="text-pinkOne text-xl font-bold ">{time} S</p>
        </div>
        <p className="text-[#0E0226] font-normal text-xl">Your Progress</p>
        <div className="flex w-[80%]">
          <ProgressBar progress={progress} />
        </div>

        <GoalComponent title="Goal" message={levels[level]?.desc} />
        {hint && (
          <div className="bg-yellow-100  text-yellow-700 p-4 mb-4 w-full text-start rounded-lg">
            <p className="font-bold">Hint:</p>
            <p>{hint}</p>
            <p className="text-sm mt-2">
              Hints used: {hintsUsed}/{maxHints}
            </p>
          </div>
        )}

        {solution && (
          <div className="bg-blue-100  text-blue-700 p-4 mb-4  w-full text-start rounded-lg">
            <p className="font-bold">Solution:</p>
            <pre className=" text-sm whitespace-pre-line">{solution}</pre>
          </div>
        )}
        <div className=" w-full">
          <InstProgrRegisComponent>
            <InstructionComponent
              instructions={levels[level]?.instruction}
              onChange={({ operation, key, value }: onChangeInstrustion) =>
                setInstruction((prev) =>
                  prev?.map((ele) =>
                    ele?.title == operation ? { ...ele, [key]: value } : ele
                  )
                )
              }
              onClick={(value: string) => {
                const type = instruction?.find((ele) => ele?.title == value);
                setProgram((prev) => [
                  ...prev,
                  `${type?.title == "LABEL" ? "" : type?.title} ${type?.operand_1} ${type?.operand_2 ? type?.operand_2 : ""}`,
                ]);
              }}
              onProgress={(value) => {
                if (value == 5) {
                  setHint("hist");
                  setHintsUsed((prev) => prev + 1);
                } else if (value == 70) {
                  setSolution(levels[level]?.result?.program?.join("\n"));
                }
                setProgress((prev) => (prev > 0 ? prev - value : 0));
              }}
            />
            <ProgramComponent
              onDelete={(ele) => {
                setProgram((prev) => prev?.filter((elem) => elem != ele));
                setRegisters(levels[level]?.registers);
              }}
              programs={program}
            />
            <RegisterComponent Registers={register} flags={flags} />
          </InstProgrRegisComponent>
        </div>
        <div className="bg-[url('/memory.png')] bg-cover bg-no-repeat min-h-[257px]  w-full my-5 flex items-center px-5 flex-col pt-[10%]">
          {memory?.map((ele) => (
            <div
              key={ele?.address}
              className="bg-[#DBEAFE] w-full text-start flex items-center px-3 py-2 rounded-[1px]"
            >
              <p className="flex-1">{ele?.address}</p>
              <p className="flex-1">{ele?.value}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button
            text="Execute Code"
            className="!bg-blueThree !text-white !text-xs !whitespace-nowrap"
            onClick={() =>
              handleExecute({ program, registers: register, flags })
            }
          />
          <Button
            text="Submit Solution"
            className="!bg-[#76C75E] !text-white !text-xs !whitespace-nowrap"
            onClick={() => {
              const result = checkRegisterTrue({
                trueRegister: levels[level]?.result?.registers,
                userRegister: register,
              });
              const checkFlags = levels[level]?.result?.flags
                ? checkRegisterTrue({
                    trueRegister: levels[level]?.result?.flags,
                    userRegister: flags,
                  })
                : true;

              if (result && checkFlags) {
                modalRef?.current?.open();
                // setLevel((prev) => prev + 1);
              } else {
                toast.error("❌ Incorrect, try again.");
              }
            }}
          />
          <Button
            text="Previous Level"
            className="!bg-[#6B7280] !text-white !text-xs !whitespace-nowrap"
            onClick={() => {
              setLevel((prev) => (prev > 0 ? prev - 1 : 0));
              addInitstate({ level: level - 1 });
            }}
          />
          <Button
            text="Next Level"
            className="!bg-[#AD72F6] !text-white !text-xs !whitespace-nowrap"
            onClick={() => {
              setLevel((prev) => prev + 1);
              addInitstate({ level: level + 1 });
            }}
          />
        </div>
      </div>
      <Modal ref={modalRef}>
        <LevelComplete
          level={String(level + 1)}
          onNextLevel={onNextLevel}
          onGoHome={() => {
            setLevel(0);
            addInitstate({ level: 0 });
            modalRef?.current?.close();
          }}
        />
      </Modal>
    </div>
  );
};

export default MainComponent;
