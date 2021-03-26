export const clearCurrent = (currentDis: string): string => {
  currentDis = currentDis = "";
  return currentDis;
};

export const clearPrevious = (previousDis: string): string => {
  previousDis = previousDis = "";
  return previousDis;
};

export const clearOperator = (operation: string): string => {
  operation = operation = undefined;
  return operation;
};

export const allClear = (
  current: string,
  prev: string,
  opert: string
): void => {
  clearCurrent(current);
  clearPrevious(prev);
  clearOperator(opert);
};
