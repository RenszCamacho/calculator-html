const updateCurrent = (currentD: any): number => {
  currentD = getDisplayNumber(currentD);
  return currentD;
};

const updatePrevious = (previousD: any, operation: string): number | string => {
  if (operation !== undefined) {
    return (previousD = getDisplayNumber(previousD));
  } else {
    return (previousD = "");
  }
};

export const updateDisplay = (
  currentDis: number,
  previousDis: number,
  operation: string
): void => {
  updateCurrent(currentDis);
  updatePrevious(previousDis, operation);
};
