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
  Xor
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
  input?: string;
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
  operation: string;
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
