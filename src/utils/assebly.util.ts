import { MemoyProps } from "@/components/assembly-game/main-component";
import { Dispatch, SetStateAction } from "react";

interface executeInstruction {
  instruction: string;
  setRegisters: Dispatch<SetStateAction<{ title: string; value: number }[]>>;
  register: { title: string; value: number }[];
  memory?: MemoyProps[];
  setMemory?: Dispatch<SetStateAction<MemoyProps[]>>;
}

interface checkSubmit {
  title: string;
  value: number;
}

export const executeInstruction = ({
  instruction,
  setRegisters,
  register,
  memory,
  setMemory,
}: executeInstruction) => {
  const parts = instruction.trim().split(/\s+/);

  const [op, arg1, arg2] = parts;
  const findReg = (name: string) => register.find((r) => r.title === name);
  const reg1 = findReg(arg1);
  const reg2 = findReg(arg2);

  const updated = [...register];

  const toNumber = (val: string | number) => Number(val);

  const operations: Record<string, () => void> = {
    MOV: () => {
      if (reg1 && reg2) reg1.value = reg2.value;
      if (reg1 && !reg2 && arg2.startsWith("[")) {
        if (memory && setMemory) {
          const datauser = arg2.replace(/\[|\]/g, "");
          const value = memory?.find((ele) => ele.address == datauser)?.value;
          if (value) {
            reg1.value = value;
          }
          setMemory(memory);
        }
      }
      if (reg1 && !reg2 && !arg2.startsWith("[")) {
        reg1.value = Number(arg2);
      }
      if (reg2 && !reg1 && arg1.startsWith("[")) {
        if (memory && setMemory) {
          const datauser = arg1.replace(/\[|\]/g, "");
          const value = memory?.find((ele) => ele.address == datauser)?.value;
          if (value) {
            reg2.value = value;
          }
          setMemory(memory);
        }
      }
      if (reg2 && !reg1 && !arg1.startsWith("[")) {
        reg2.value = Number(arg1);
      }
    },
    ADD: () => {
      if (reg1 && reg2) {
        reg1.value += reg2.value;
      }
      if (reg2 && !reg1 && !arg1.startsWith("[")) {
        reg2.value += Number(arg1);
      }
      if (reg1 && !reg2 && !arg2.startsWith("[")) {
        reg1.value += Number(arg2);
      }
    },
    SUB: () => {
      if (reg1 && reg2) reg1.value -= reg2.value;
      if (reg2 && !reg1 && !arg1.startsWith("[")) {
        reg2.value -= Number(arg1);
      }
      if (reg1 && !reg2 && !arg2.startsWith("[")) {
        reg1.value -= Number(arg2);
      }
    },
    INC: () => {
      if (reg1) reg1.value += 1;
    },
    DEC: () => {
      if (reg1) reg1.value -= 1;
    },
    MOVI: () => {
      if (reg1 && !isNaN(toNumber(arg2))) reg1.value = toNumber(arg2);
    },
  };

  const opKey = op.toUpperCase();
  if (operations[opKey]) {
    operations[opKey]();
  } else {
    console.warn("Unknown operation:", opKey);
  }
  setRegisters(updated);
};

export const checkRegisterTrue = ({
  trueRegister,
  userRegister,
}: {
  trueRegister: checkSubmit[];
  userRegister: checkSubmit[];
}): boolean => {

  if (trueRegister?.length !== userRegister?.length) return false;

  return trueRegister.every((reg, index) => {
    return (
      reg.title === userRegister[index].title &&
      reg.value === userRegister[index].value
    );
  });
};
