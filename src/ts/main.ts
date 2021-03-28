const numberButtons = document.querySelectorAll(".box__number");
const operationButtons = document.querySelectorAll(".box__operator");
const equalsButton = document.querySelector("#equal");
const deleteButton = document.querySelector("#reset");
const allClearButton = document.querySelector("#AC");
const previousOperandTextElement = document.querySelector(".box__previousNum");
const currentOperandTextElement = document.querySelector(".box__currentNum");

let currentOperand: string = "";
let previousOperand: string = "";
let operation = undefined;

const clear = (): void => {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
};

const deleteNumber = (): void => {
  currentOperand = currentOperand.toString().slice(0, -1);
};

//Resvisalo luego para retirar el .toString()
const appendNumber = (number: string): void => {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
};

const chooseOperation = (operatorButton: string): void => {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = operatorButton;
  previousOperand = currentOperand;
  currentOperand = "";
};

const compute = (): void => {
  let result: any;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "x":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    default:
      return;
  }
  // Number.isInteger(result)
  //   ? (currentOperand = result)
  //   : (currentOperand = result.toFixed(1));
  previousOperand = "";
  currentOperand = result;
  operation = undefined;
};

const getDisplayNumber = (number: string): string => {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay: string;
  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en");
  }
  if (decimalDigits !== undefined) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
};

const updateDisplay = (): void => {
  const currentOperandAsHTMLElement = currentOperandTextElement as HTMLElement;
  currentOperandAsHTMLElement.innerText = currentOperand;
  if (operation !== undefined) {
    currentOperandAsHTMLElement.innerText = `${previousOperand} ${operation}`;
  } else {
    currentOperandAsHTMLElement.innerText = "";
  }
  // previousOperandTextElement.innerText = previousOperand;
};
