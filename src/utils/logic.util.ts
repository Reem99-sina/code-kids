import { AndOff, LampOff, LampOn, NottIcon, Or } from "@/assets";
import InputBinaryComponent from "@/components/games/input-binary-component";

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

export const eachElement = [
  {
    id: 1,
    title: "and",
    Icon: AndOff,
  },
  {
    id: 2,
    title: "or",
    Icon: Or,
  },
  {
    id: 3,
    title: "lamp-off",
    Icon: LampOff,
  },
  {
    id: 4,
    title: "lamp-on",
    Icon: LampOn,
  },
  {
    id: 5,
    title: "input",
    Icon: InputBinaryComponent,
  },
  {
    id: 6,
    title: "not",
    Icon: NottIcon,
  },
];
