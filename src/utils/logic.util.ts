import {
  And,
  AndOff,
  LampOff,
  LampOn,
  Nand,
  NandOff,
  NotOntIcon,
  NottIcon,
  OrOff,
  OrOn,
  Xor,
} from "@/assets";

import InputBinaryComponent from "@/components/games/input-binary-component";
import { FunctionComponent, SVGProps } from "react";

export const generateUniqueId = () =>
  Date.now() + Math.floor(Math.random() * 1000);

export const dataAndItems = [
  {
    input_1: 0,
    input_2: 0,
    output: 0,
  },
  {
    input_1: 0,
    input_2: 1,
    output: 0,
  },
  {
    input_1: 1,
    input_2: 0,
    output: 0,
  },
  {
    input_1: 1,
    input_2: 1,
    output: 1,
  },
];

export const dataOrItems = [
  {
    input_1: 0,
    input_2: 0,
    output: 0,
  },
  {
    input_1: 0,
    input_2: 1,
    output: 1,
  },
  {
    input_1: 1,
    input_2: 0,
    output: 1,
  },
  {
    input_1: 1,
    input_2: 1,
    output: 1,
  },
];

export const dataNotItems = [
  {
    input_1: 0,

    output: 1,
  },
  {
    input_1: 1,

    output: 0,
  },
];

export const dataNandItems = [
  {
    input_1: 0,
    input_2: 0,
    output: 1,
  },
  {
    input_1: 0,
    input_2: 1,
    output: 1,
  },
  {
    input_1: 1,
    input_2: 0,
    output: 1,
  },
  {
    input_1: 1,
    input_2: 1,
    output: 0,
  },
];

export const dataNorItems = [
  {
    input_1: 0,
    input_2: 0,
    output: 1,
  },
  {
    input_1: 0,
    input_2: 1,
    output: 0,
  },
  {
    input_1: 1,
    input_2: 0,
    output: 0,
  },
  {
    input_1: 1,
    input_2: 1,
    output: 0,
  },
];

export const dataXorItems = [
  {
    input_1: 0,
    input_2: 0,
    output: 0,
  },
  {
    input_1: 0,
    input_2: 1,
    output: 1,
  },
  {
    input_1: 1,
    input_2: 0,
    output: 1,
  },
  {
    input_1: 1,
    input_2: 1,
    output: 0,
  },
];

export const dataItems = [
  {
    input_1: 0,
    input_2: 0,
    output: 0,
  },
  {
    input_1: 0,
    input_2: 1,
    output: 1,
  },
  {
    input_1: 0,
    input_2: 0,
    output: 1,
  },
  {
    input_1: 0,
    input_2: 1,
    output: 0,
  },
  {
    input_1: 1,
    input_2: 0,
    output: 1,
  },
  {
    input_1: 1,
    input_2: 1,
    output: 1,
  },
  {
    input_1: 1,
    input_2: 0,
    output: 0,
  },
  {
    input_1: 1,
    input_2: 1,
    output: 0,
  },
];

export enum Operations {
  And = "and",
  Or = "or",
  LampOff = "lamp-off",
  Input = "input",
  Nand = "nand",
  Not = "not",
  Xor = "xor",
  Nor = "Nor",
}

export const eachElement = [
  {
    id: 1,
    title: "and",
    Icon: AndOff,
    Reverse: And,
  },
  {
    id: 2,
    title: "or",
    Icon: OrOff,
    Reverse: OrOn,
  },
  {
    id: 3,
    title: "lamp-off",
    Icon: LampOff,
    Reverse: LampOn,
  },
  {
    id: 4,
    title: "input",
    Icon: InputBinaryComponent,
  },
  {
    id: 5,
    title: "nand",
    Icon: NandOff,
    Reverse: Nand,
  },
  {
    id: 6,
    title: "not",
    Icon: NottIcon,
    Reverse: NotOntIcon,
  },
  {
    id: 7,
    title: "xor",
    Icon: Xor,
    Reverse: Xor,
  },
  {
    id: 8,
    title: "Nor",
    Icon: NottIcon,
    Reverse: NotOntIcon,
  },
];

export interface componentInputProps {
  value?: number;
  onChange?: (value: number) => void;
}

export interface BoxInterface {
  Icon:
    | FunctionComponent<SVGProps<SVGSVGElement>>
    | FunctionComponent<componentInputProps>;
  id: number;
  title: string;
  Reverse?: FunctionComponent<SVGProps<SVGSVGElement>>;
  index?: number;
  repeat?: number;
  order?: number;
}
export interface dotInfo {
  color: string;
  direction: string;
  id: number;
  x: number;
  y: number;
  side?: string;
  input?: string | number;
  box?: BoxInterface;
}
export interface LineDirection {
  from: dotInfo;
  to: dotInfo;
}

export interface mouseMove {
  x: number;
  y: number;
}

export const andOperation = ({
  input_1,
  input_2,
}: {
  input_1: number;
  input_2: number;
}) => {
  return input_1 == 1 && input_2 == 1 ? 1 : 0;
};

export const orOperation = ({
  input_1,
  input_2,
}: {
  input_1: number;
  input_2: number;
}) => {
  return input_1 == 1 || input_2 == 1 || (input_1 == 1 && input_2 == 1) ? 1 : 0;
};

export const notOrOperation = ({
  input_1,
  input_2,
}: {
  input_1: number;
  input_2: number;
}) => {
  return input_1 == 0 && input_2 == 0 ? 1 : 0;
};

export const nandOperation = ({
  input_1,
  input_2,
}: {
  input_1: number;
  input_2: number;
}) => {
  return (input_1 == 0 && input_2 == 0) || input_1 != input_2 ? 1 : 0;
};

export const notOperation = ({ input_1 }: { input_1: number }) => {
  return input_1 == 0 ? 1 : 0;
};

export const xorOperation = ({
  input_1,
  input_2,
}: {
  input_1: number;
  input_2: number;
}) => {
  return input_1 != input_2 ? 1 : 0;
};

export const useLineInBoxRemove = (
  box: BoxInterface,
  lines: (LineDirection | undefined)[],
  onChange: (lines: (LineDirection | undefined)[]) => void
) => {
  const linesConnects = lines?.filter(
    (ele) => ele?.to?.id != box?.id && ele?.from?.id != box?.id
  );

  onChange([...linesConnects]);
};

export const useOutput = ({
  input_1,
  input_2,
  operation,
}: {
  input_1: number;
  input_2: number;
  operation?: string;
}) => {
  return operation == "nand"
    ? nandOperation({ input_1, input_2 })
    : operation == "and"
      ? andOperation({ input_1, input_2 })
      : operation == "or"
        ? orOperation({ input_1, input_2 })
        : operation == "not"
          ? notOperation({ input_1 })
          : operation == "nor"
            ? notOrOperation({ input_1: input_1, input_2: input_2 })
            : operation == "xor"
              ? xorOperation({ input_1: input_1, input_2: input_2 })
              : 0;
};

export interface LogicTrace {
  boxId: number;
  title: string;
  inputs: { fromBoxId: number; value: number }[];
  result: number;
}

export function evaluateLogicWithTrace(
  box: BoxInterface,
  lines: (LineDirection | undefined)[],
  binary: { input_1: number; input_2: number },
  cache: Map<number, { result: number; trace: LogicTrace[] }> = new Map()
): { result: number; trace: LogicTrace[] } {
  if (cache.has(box.id)) return cache.get(box.id)!;

  if (box.title === "input") {
    const key = `input_${box.index}` as keyof typeof binary;
    const value = binary[key];
    const resultObj = {
      result: value,
      trace: [
        {
          boxId: box.id,
          title: "input",
          inputs: [],
          result: value,
        },
      ],
    };
    cache.set(box.id, resultObj);

    return resultObj;
  }

  const incomingLines = lines.filter((line) => line?.to?.box?.id === box.id);

  const getInputBox = (direction: string): BoxInterface | undefined =>
    incomingLines.find((line) => line?.to?.direction === direction)?.from?.box;

  const collectInput = (direction: string) => {
    const inputBox = getInputBox(direction);
    if (!inputBox) return { value: 0, trace: [], fromBoxId: -1 };
    const { result, trace } = evaluateLogicWithTrace(
      inputBox,
      lines,
      binary,
      cache
    );

    return { value: result, trace, fromBoxId: inputBox.id };
  };

  const inputs: { fromBoxId: number; value: number }[] = [];
  let result = 0;
  let trace: LogicTrace[] = [];

  switch (box.title) {
    case "not": {
      const input = collectInput("center");
      result = input.value === 1 ? 0 : 1;
      trace = [...input.trace];
      inputs.push({ fromBoxId: input.fromBoxId, value: input.value });
      break;
    }
    case "and":
    case "nand":
    case "or":
    case "xor": {
      const in1 = collectInput("top");
      const in2 = collectInput("bottom");

      const a = in1.value;
      const b = in2.value;
      trace = [...in1.trace, ...in2.trace];

      if (box.title === "and")
        result = andOperation({ input_1: a, input_2: b });
      else if (box.title === "nand")
        result = nandOperation({ input_1: a, input_2: b });
      else if (box.title === "or")
        result = orOperation({ input_1: a, input_2: b });
      else if (box.title === "xor")
        result = xorOperation({ input_1: a, input_2: b });

      inputs.push({ fromBoxId: in1.fromBoxId, value: a });
      inputs.push({ fromBoxId: in2.fromBoxId, value: b });
      break;
    }
    case "lamp-off":
    case "lamp-on": {
      const input = collectInput("center");
      result = input.value;
      trace = [...input.trace];
      inputs.push({ fromBoxId: input.fromBoxId, value: input.value });
      break;
    }
    default:
      return { result: 0, trace: [] };
  }

  trace.push({
    boxId: box.id,
    title: box.title,
    inputs,
    result,
  });

  const final = { result, trace };
  cache.set(box.id, final);

  return final;
}
