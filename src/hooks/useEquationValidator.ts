export const useEquationValidator = (equation: string) => {
  const isValid = /^[0-9x\+\-\*/\^(). ]+$/.test(equation);
  return isValid;
};
