export const compute = (
  operation: string,
  previousDis: string,
  currentDis: string
): number => {
  let computation: number;
  const prev = parseFloat(previousDis);
  const current = parseFloat(currentDis);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }
  return computation;
};
