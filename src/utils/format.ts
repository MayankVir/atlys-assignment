import { FunctionData } from "../types/types";

export const rearrangeArray = (array: FunctionData[], indexFlow: number[]) => {
  return indexFlow.map((index) => array[index - 1]);
};
