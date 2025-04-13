import {  And, AndOff, LampOff, LampOn, Nand, NandOff, Or } from "@/assets";
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
    Reverse:And
  },
  {
    id: 2,
    title: "or",
    Icon: Or,
    Reverse:Or
  },
  {
    id: 3,
    title: "lamp-off",
    Icon: LampOff,
    Reverse:LampOn
  }, 
  {
    id: 4,
    title: "input",
    Icon: InputBinaryComponent,
  },
  {
    id: 5,
    title: "nane",
    Icon: NandOff,
    Reverse:Nand
  },
];

export interface  componentInputProps {
  value?: number;
  onChange?: (value: number) => void;
}