import { ReactNode } from "react";

export interface trackInterface {
  id: number;
  name: string;
  description: string | null;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface FilterOptionChild {
  name: string;
  count: number;
  isSelected?: boolean;
}

export interface FilterElementWithChildren {
  title: string;
  icon?: ReactNode;
  children: FilterOptionChild[];
}

export interface FilterElementSimple {
  title: string;
  count: number | string;
}

export type FilterElement = FilterElementWithChildren | FilterElementSimple;

export interface FilterSection {
  title: string;
  type?:string;
  element: FilterElement[];
}
