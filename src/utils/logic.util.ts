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
} from "@/assets";

import InputBinaryComponent from "@/components/games/input-binary-component";
import { FunctionComponent, SVGProps } from "react";

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
    Reverse:NotOntIcon
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
}
export interface dotInfo {
  color: string;
  direction: string;
  id: number;
  x: number;
  y: number;
  side?:string
}
export interface LineDirection {
  from: dotInfo;
  to: dotInfo;
}

export interface mouseMove {
  x: number;
  y: number;
}
