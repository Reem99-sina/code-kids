import { MemoyProps } from "@/components/assembly-game/main-component";
import { Dispatch, SetStateAction } from "react";

interface executeInstruction {
  resultRegisters: { title: string; value: number }[];
  resultFlags: { title: string; value: number }[];
  program: string[];
  index: number;
  memory?: MemoyProps[];
  setMemory: Dispatch<SetStateAction<MemoyProps[]>>;
}

interface checkSubmit {
  title: string;
  value: number;
}

export const executeInstruction = ({
  resultRegisters,
  resultFlags,
  index,
  program,
  memory,
  setMemory,
}: executeInstruction) => {
  const findRegister = (name: string) =>
    resultRegisters.find((r) => r.title === name);

  const setFlag = (name: string, value: number) => {
    const flag = resultFlags.find((f) => f.title === name);
    if (flag) flag.value = value;
  };

  while (index < program.length) {
    const instruction = program[index];
    const parts = instruction.trim().split(/\s+/);
    const [opRaw, arg1, arg2] = parts;
    const op = opRaw.toUpperCase();

    const reg1 = findRegister(arg1);
    const reg2 = findRegister(arg2);

    const getValue = (arg: string) => {
      const reg = findRegister(arg);

      return reg ? reg.value : Number(arg);
    };

    switch (op) {
      case "MOV":
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
        break;

      case "ADD":
        if (reg1 && reg2) reg1.value += reg2.value;
        if (reg1 && !reg2 && arg2.startsWith("[")) {
          if (memory && setMemory) {
            const datauser = arg2.replace(/\[|\]/g, "");
            const value = memory?.find((ele) => ele.address == datauser)?.value;
            if (value) {
              reg1.value += value;
            }
            setMemory(memory);
          }
        }
        if (reg1 && !reg2 && !arg2.startsWith("[")) {
          reg1.value += Number(arg2);
        }
        if (reg2 && !reg1 && arg1.startsWith("[")) {
          if (memory && setMemory) {
            const datauser = arg1.replace(/\[|\]/g, "");
            const value = memory?.find((ele) => ele.address == datauser)?.value;
            if (value) {
              reg2.value += value;
            }
            setMemory(memory);
          }
        }
        if (reg2 && !reg1 && !arg1.startsWith("[")) {
          reg2.value += Number(arg1);
        }
        break;

      case "SUB":
        if (reg1 && reg2) reg1.value -= reg2.value;
        if (reg1 && !reg2 && arg2.startsWith("[")) {
          if (memory && setMemory) {
            const datauser = arg2.replace(/\[|\]/g, "");
            const value = memory?.find((ele) => ele.address == datauser)?.value;
            if (value) {
              reg1.value -= value;
            }
            setMemory(memory);
          }
        }
        if (reg1 && !reg2 && !arg2.startsWith("[")) {
          reg1.value -= Number(arg2);
        }
        if (reg2 && !reg1 && arg1.startsWith("[")) {
          if (memory && setMemory) {
            const datauser = arg1.replace(/\[|\]/g, "");
            const value = memory?.find((ele) => ele.address == datauser)?.value;
            if (value) {
              reg2.value -= value;
            }
            setMemory(memory);
          }
        }
        if (reg2 && !reg1 && !arg1.startsWith("[")) {
          reg2.value -= Number(arg1);
        }
        break;

      case "CMP":
        if (reg1 && reg2) {
          if (reg1.value == reg2.value) {
            setFlag("ZF", 1);
          } else {
            const result = reg1.value - reg2.value;
            if (result >= 0) {
              setFlag("SF", 0);
              setFlag("CF", 0);
            } else {
              setFlag("SF", 1);
              setFlag("CF", 1);
            }
            setFlag("ZF", 0);
          }
        } else if (reg1 && !reg2) {
          if (reg1.value == getValue(arg2)) {
            setFlag("ZF", 1);
          } else {
            const result = reg1.value - getValue(arg2);
            if (result >= 0) {
              setFlag("SF", 0);
              setFlag("CF", 0);
            } else {
              setFlag("SF", 1);
              setFlag("CF", 1);
            }
            setFlag("ZF", 0);
          }
        } else if (reg2 && !reg1) {
          if (reg2.value == getValue(arg1)) {
            setFlag("ZF", 1);
          } else {
            const result = reg2.value - getValue(arg1);
            if (result >= 0) {
              setFlag("SF", 0);
              setFlag("CF", 0);
            } else {
              setFlag("SF", 1);
              setFlag("CF", 1);
            }
            setFlag("ZF", 0);
          }
        }
        break;

      case "JE":
        {
          const zf = resultFlags.find((f) => f.title === "ZF")?.value;
          if (zf === 1) {
            const jumpTo = program.findIndex((line) =>
              line.trim().startsWith(arg1)
            );
            if (jumpTo !== -1) {
              index = jumpTo;
              break;
            }
          }
        }
        break;

      case "JMP":
        {
          const jumpTo = program.findIndex((line) =>
            line.trim().startsWith(arg1)
          );
          if (jumpTo !== -1) {
            index = jumpTo;
            continue;
          }
        }
        break;
      case "PUSH":
        {
          const sp = findRegister("SP");

          if (reg1 && sp) {
            if (memory && memory.length > 0) {
              sp.value -= 1;
            }
            memory?.unshift({ address: String(sp?.value), value: reg1.value });
          }
        }
        break;
      case "POP":
        {
          const sp = findRegister("SP");

          if (reg1 && sp) {
            const Newvalue = memory?.find(
              (ele) => ele?.address == String(sp?.value)
            )?.value;

            if (Newvalue != undefined) {
              reg1.value = Newvalue;
              memory = memory?.filter(
                (ele) => ele?.address != String(sp?.value)
              );
              if (memory && memory?.length > 0) {
                sp.value += 1;
              }
            }
          }
        }
        break;
      case "AND":
        {
          if (reg1 && reg2) {
            const result = reg1.value & reg2.value;
            reg1.value = result;
          } else if (reg1 && !reg2 && arg2.startsWith("[")) {
            const datauser = arg2.replace(/\[|\]/g, "");
            const value = memory?.find((ele) => ele.address == datauser)?.value;
            if (value) {
              const result = reg1.value & value;
              reg1.value = result;
            }
          } else if (reg1 && !reg2 && !arg2.startsWith("[")) {
            const result = reg1.value & Number(arg2);
            reg1.value = result;
          }
        }
        break;
      case "LOAD":
        {
          if (reg1 && arg2.startsWith("[")) {
            const datauser = arg2.replace(/\[|\]/g, "");

            const value = memory?.find((ele) => ele.address == datauser)?.value;
            if (value) {
              reg1.value = value;
            } else {
              const reg2 = findRegister(datauser);
              if (reg2) {
                const value = memory?.find(
                  (ele) => ele.address == String(reg2?.value)
                )?.value;
                if (value) reg1.value = value;
              }
            }
          }
        }
        break;
      case "JG":
        {
          const zf = resultFlags.find((f) => f.title === "ZF")?.value;
          const sf = resultFlags.find((f) => f.title === "SF")?.value;

          if (zf == sf) {
            const jumpTo = program.findIndex((line) =>
              line.trim().startsWith(arg1)
            );
            if (jumpTo !== -1) {
              index = jumpTo;
              break;
            }
          }
        }
        break;
      case "JL":
        {
     
          const sf = resultFlags.find((f) => f.title === "SF")?.value;

          if (sf&&sf>0) {
            const jumpTo = program.findIndex((line) =>
              line.trim().startsWith(arg1)
            );
            if (jumpTo !== -1) {
              index = jumpTo;
              break;
            }
          }
        }
        break;
      case "INC":
        if (reg1) reg1.value += 1;
        break;

      case "DEC":
        if (reg1) reg1.value -= 1;
        break;

      default:
        console.warn("Unknown operation:", op);
        break;
    }

    index++;
  }
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
