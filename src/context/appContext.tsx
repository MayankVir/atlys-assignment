import React, { createContext, useEffect, useState } from "react";
import { FunctionData } from "../types/types";
import { rearrangeArray } from "../utils/format";

type Props = {
  children: React.ReactNode;
};

const initialState = {
  functions: [
    { id: 1, equation: "x*2", input: 0, output: 0 },
    { id: 2, equation: "2*x+4", input: 0, output: 0 },
    { id: 3, equation: "x-2", input: 0, output: 0 },
    { id: 4, equation: "x/2", input: 0, output: 0 },
    { id: 5, equation: "x^2+20", input: 0, output: 0 },
  ],
  initialValue: 0,
  setInitialValue: (value: number) => {},
  updateFunction: (id: number, equation: string) => {},
  calculateChain: (functions: FunctionData[]) => {},
};

export const AppContext = createContext(initialState);

const AppContextProvider = ({ children }: Props) => {
  const calculationFlow = [1, 2, 4, 5, 3];
  const [functions, setFunctions] = useState<FunctionData[]>([
    { id: 1, equation: "x*2", input: 0, output: 0 },
    { id: 2, equation: "2*x+4", input: 0, output: 0 },
    { id: 3, equation: "x-2", input: 0, output: 0 },
    { id: 4, equation: "x/2", input: 0, output: 0 },
    { id: 5, equation: "x^2+20", input: 0, output: 0 },
  ]);
  const [initialValue, setInitialValue] = useState<number>(2);

  const updateFunction = (id: number, equation: string) => {
    calculateChain(
      functions.map((func) => (func.id === id ? { ...func, equation } : func)),
    );
  };

  const calculateChain = (functions: FunctionData[]) => {
    let currentValue = initialValue;
    const newFunctions = rearrangeArray(functions, calculationFlow).map(
      (func) => {
        try {
          const formattedEquation = func.equation.replaceAll("^", "**");
          const output = eval(
            formattedEquation.replace(/x/g, `${currentValue}`),
          );
          const updatedFunc = { ...func, input: currentValue, output };
          currentValue = output;
          return updatedFunc;
        } catch (error) {
          console.error("Invalid equation", func.equation);
          return { ...func, input: currentValue, output: NaN };
        }
      },
    );

    setFunctions(newFunctions.sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    calculateChain(functions);
  }, [initialValue]);

  const contextValue = {
    functions,
    initialValue,
    setInitialValue,
    updateFunction,
    calculateChain,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
