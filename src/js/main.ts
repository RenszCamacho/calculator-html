const buttonNumber = document.querySelectorAll(".box__number");
const buttonOperator = document.querySelectorAll(".box__operator");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");
const AC = document.getElementById("AC");
const previousDisplay = document.querySelector(".box__previousNum");
const currentDisplay = document.querySelector(".box__currentNum");

const clearCurrent = (currentDis: string): string => {
  currentDis = currentDis = "";
  return currentDis;
};

const clearPrevious = (previousDis: string): string => {
  previousDis = previousDis = "";
  return previousDis;
};

const clearOperator = (operation: string): string => {
  operation = operation = undefined;
  return operation;
};

const allClear = (current: string, prev: string, opert: string): void => {
  clearCurrent(current);
  clearPrevious(prev);
  clearOperator(opert);
};

const deleteCurrent = (currentDis: any): string => {
  currentDis = currentDis.toString().slice(0, -1);
  return currentDis;
};

// REVISAR
const appendNumber = (
  number: number | string,
  currentDis: number | string
): string => {
  currentDis = currentDis.toString();
  number = number.toString();
  if (number === "," && currentDis.includes(",")) return;
  return currentDis + number;
};

const compute = (
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

const getDisplayNumber = (number: number): string => {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(",")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay: string;
  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }
  if (decimalDigits !== undefined) {
    return `${integerDisplay},${decimalDigits}`;
  } else {
    return integerDisplay;
  }
};

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

const updateDisplay = (
  currentDis: number,
  previousDis: number,
  operation: string
): void => {
  updateCurrent(currentDis);
  updatePrevious(previousDis, operation);
};
