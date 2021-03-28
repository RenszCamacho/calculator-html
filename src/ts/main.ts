const numberButtons = document.querySelectorAll(".box__number");
const operationButtons = document.querySelectorAll(".box__operator");
const equalsButton = document.querySelector("#equal");
const deleteButton = document.querySelector("#reset");
const allClearButton = document.querySelector("#AC");
const previousOperandTextElement = document.querySelector(".box__previousNum");

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

//No olvidar descomentar la funcion compute()
const chooseOperation = (operatorButton: string): void => {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    // compute();
  }
  operation = operatorButton;
  previousOperand = currentOperand;
  currentOperand = "";
};
