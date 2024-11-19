export type FunctionData = {
  id: number;
  equation: string;
  input: number;
  output: number;
};

export type FunctionCardProps = {
  id: number;
  equation: string;
  input: number;
  output?: number;
  reference?: any;
};

export type ConnectionLinesProps = {
  functions: FunctionData[];
};
